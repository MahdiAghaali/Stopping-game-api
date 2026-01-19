import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { GameResultsService } from './game_results.service';
import { CreateGameResultDto } from './dto/create-game_result.dto';
import { UpdateGameResultDto } from './dto/update-game_result.dto';

@Controller('gameResults')
export class GameResultsController {
  constructor(private readonly resultService: GameResultsService) {}

  @Post()
  create(@Body() dto: CreateGameResultDto) {
    return this.resultService.create(dto);
  }

  @Get()
  findAll() {
    return this.resultService.findAll();
  }

  @Get('leaderboard')
  async getLeaderboard() {
    return this.resultService.getLeaderboard();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resultService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateGameResultDto) {
    return this.resultService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resultService.remove(Number(id));
  }
}
