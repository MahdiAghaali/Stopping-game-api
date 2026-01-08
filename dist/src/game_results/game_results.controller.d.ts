import { GameResultsService } from './game_results.service';
import { CreateGameResultDto } from './dto/create-game_result.dto';
import { UpdateGameResultDto } from './dto/update-game_result.dto';
export declare class GameResultsController {
    private readonly resultService;
    constructor(resultService: GameResultsService);
    create(dto: CreateGameResultDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        userID: number;
        resultID: number;
        sessionID: number;
        datasetId: number;
        stoppingStep: number;
        score: number;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        createdAt: Date;
        updatedAt: Date;
        userID: number;
        resultID: number;
        sessionID: number;
        datasetId: number;
        stoppingStep: number;
        score: number;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__GameResultClient<{
        createdAt: Date;
        updatedAt: Date;
        userID: number;
        resultID: number;
        sessionID: number;
        datasetId: number;
        stoppingStep: number;
        score: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateGameResultDto): import("@prisma/client").Prisma.Prisma__GameResultClient<{
        createdAt: Date;
        updatedAt: Date;
        userID: number;
        resultID: number;
        sessionID: number;
        datasetId: number;
        stoppingStep: number;
        score: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__GameResultClient<{
        createdAt: Date;
        updatedAt: Date;
        userID: number;
        resultID: number;
        sessionID: number;
        datasetId: number;
        stoppingStep: number;
        score: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
