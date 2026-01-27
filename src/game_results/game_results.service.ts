import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateGameResultDto } from './dto/create-game_result.dto';
import { UpdateGameResultDto } from './dto/update-game_result.dto';
import { DatasetT } from '../game/game.service';
import * as fs from 'fs';
import * as path from 'path';
import csv from 'csv-parser';

@Injectable()
export class GameResultsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateGameResultDto) {
    let user = await this.prisma.user.findUnique({
      where: { uuid: data.uuid },
    });

    if (!user) {
      await this.prisma.user.create({
        data: { uuid: data.uuid },
      });
      user = await this.prisma.user.findUnique({
        where: { uuid: data.uuid },
      });
      if (!user) {
        throw new Error(`User '${data.uuid}' not found`);
      }
    }

    return this.prisma.gameResult.create({
      data: {
        userID: user.userID,
        datasetId: data.datasetId,
        stoppingStep: data.stoppingStep,
        score: data.score,
        sessionID: data.sessionID, // <-- store null if undefined
      },
    });
  }

  findAll() {
    return this.prisma.gameResult.findMany();
  }

  findOne(resultID: number) {
    return this.prisma.gameResult.findUnique({ where: { resultID } });
  }

  update(resultID: number, data: UpdateGameResultDto) {
    return this.prisma.gameResult.update({ where: { resultID }, data });
  }

  remove(resultID: number) {
    return this.prisma.gameResult.delete({ where: { resultID } });
  }

  private readonly registryPath =
    process.env.REGISTRY ??
    path.join(process.cwd(), 'src', 'series_registry.csv');

  private readRegistry(): Promise<DatasetT[]> {
    return new Promise((resolve, reject) => {
      const rows: DatasetT[] = [];

      fs.createReadStream(this.registryPath)
        .pipe(csv())
        .on('data', (data: DatasetT) => {
          rows.push({
            id: Number(data.id),
            dataset: data.dataset,
            method: data.method,
            method_confidence_level: data.method_confidence_level,
            method_bias: data.method_bias,
            method_recall_target: data.method_recall_target,
            filename: data.filename,
            row_count: Number(data.row_count),
            rows: undefined,
          });
        })
        .on('end', () => resolve(rows))
        .on('error', reject);
    });
  }

  async getLeaderboard() {
    // 1. Load CSV registry once
    const registry = await this.readRegistry();

    // 2. Load all game results with user info
    const results = await this.prisma.gameResult.findMany({
      include: {
        user: true, // get username
      },
    });

    // 3. Map datasetId → datasetName from registry
    return results.map((r) => ({
      username: r.user.userName, // replace ID with username
      userUID: r.user.uuid, // replace ID with username
      stoppingStep: r.stoppingStep,
      score: r.score,
      sessionID: r.sessionID ?? null,
      datasetId: r.datasetId,
      datasetName:
        registry.find((ds) => ds.id === r.datasetId)?.dataset || 'Unknown',
    }));
  }
}
