import { Test, TestingModule } from '@nestjs/testing';
import { GameResultsController } from './game_results.controller';

describe('GameResultsController', () => {
  let controller: GameResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameResultsController],
    }).compile();

    controller = module.get<GameResultsController>(GameResultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
