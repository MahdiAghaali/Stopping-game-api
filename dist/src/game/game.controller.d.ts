import { GameService } from './game.service';
export declare class GameController {
    private readonly gameService;
    constructor(gameService: GameService);
    getFilesByIds(ids: number[]): Promise<{
        id: number;
        dataset: string;
        method: string;
        method_confidence_level: number | "nan" | "none";
        method_bias: number | "nan" | "none";
        method_recall_target: number | "nan" | "none";
        filename: string;
        row_count: number;
        rows: unknown;
    }[]>;
}
