import { GameService } from './game.service';
export declare class GameController {
    private readonly gameService;
    constructor(gameService: GameService);
    getFilesByIds(ids: number[]): Promise<import("./game.service").DatasetT[]>;
}
