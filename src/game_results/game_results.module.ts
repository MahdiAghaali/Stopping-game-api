import { Module } from '@nestjs/common';
import { GameResultsController } from './game_results.controller';
import { GameResultsService } from './game_results.service';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [GameResultsController],
  providers: [GameResultsService, PrismaService],
})
export class GameResultsModule {}
