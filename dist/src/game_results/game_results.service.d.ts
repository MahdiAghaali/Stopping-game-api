import { PrismaService } from '../common/prisma.service';
import { CreateGameResultDto } from './dto/create-game_result.dto';
import { UpdateGameResultDto } from './dto/update-game_result.dto';
export declare class GameResultsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateGameResultDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        userID: number;
        resultID: number;
        sessionID: number | null;
        datasetId: number;
        stoppingStep: number;
        score: number;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        createdAt: Date;
        updatedAt: Date;
        userID: number;
        resultID: number;
        sessionID: number | null;
        datasetId: number;
        stoppingStep: number;
        score: number;
    }[]>;
    findOne(resultID: number): import("@prisma/client").Prisma.Prisma__GameResultClient<{
        createdAt: Date;
        updatedAt: Date;
        userID: number;
        resultID: number;
        sessionID: number | null;
        datasetId: number;
        stoppingStep: number;
        score: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(resultID: number, data: UpdateGameResultDto): import("@prisma/client").Prisma.Prisma__GameResultClient<{
        createdAt: Date;
        updatedAt: Date;
        userID: number;
        resultID: number;
        sessionID: number | null;
        datasetId: number;
        stoppingStep: number;
        score: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(resultID: number): import("@prisma/client").Prisma.Prisma__GameResultClient<{
        createdAt: Date;
        updatedAt: Date;
        userID: number;
        resultID: number;
        sessionID: number | null;
        datasetId: number;
        stoppingStep: number;
        score: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    private readonly registryPath;
    private readRegistry;
    getLeaderboard(): Promise<{
        username: string | null;
        userUID: string;
        stoppingStep: number;
        score: number;
        sessionID: number | null;
        datasetId: number;
        datasetName: string;
    }[]>;
}
