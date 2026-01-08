import { Controller, Post, Body } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('files')
  async getFilesByIds(@Body('ids') ids: number[]) {
    return this.gameService.loadFilesByIds(ids);
  }
}
