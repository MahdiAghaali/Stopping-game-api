import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GameResultsModule } from './game_results/game_results.module';
import { PrismaService } from './common/prisma.service';

@Module({
  imports: [UsersModule, GameResultsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
