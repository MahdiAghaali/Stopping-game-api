import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateGameResultDto } from './dto/create-game_result.dto';
import { UpdateGameResultDto } from './dto/update-game_result.dto';

@Injectable()
export class GameResultsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateGameResultDto) {
    const user = await this.prisma.user.findUnique({
      where: { uuid: data.uuid },
    });

    if (!user) {
      throw new Error(`User '${data.uuid}' not found`);
    }

    // 2. Create the result using the user's ID
    return this.prisma.gameResult.create({
      data: {
        userID: user.userID,
        sessionID: data.sessionID, // must provide a number
        datasetId: data.datasetId,
        stoppingStep: data.stoppingStep,
        score: data.score,
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
}
