import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateGameResultDto } from './dto/create-game_result.dto';
import { UpdateGameResultDto } from './dto/update-game_result.dto';

@Injectable()
export class GameResultsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateGameResultDto) {
    return this.prisma.gameResult.create({ data });
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
