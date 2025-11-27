// src/results/results.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ResultsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.gameResult.findMany({
      include: { user: true }, // Include related user info
    });
  }

  findOne(id: number) {
    return this.prisma.gameResult.findUnique({
      where: { resultID: id },
      include: { user: true },
    });
  }

  create(data: Prisma.GameResultCreateInput) {
    return this.prisma.gameResult.create({ data });
  }

  update(id: number, data: Prisma.GameResultUpdateInput) {
    return this.prisma.gameResult.update({
      where: { resultID: id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.gameResult.delete({
      where: { resultID: id },
    });
  }
}
