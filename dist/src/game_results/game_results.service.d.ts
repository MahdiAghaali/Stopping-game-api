import { PrismaService } from '../common/prisma.service';
import { CreateGameResultDto } from './dto/create-game_result.dto';
import { UpdateGameResultDto } from './dto/update-game_result.dto';
export declare class GameResultsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateGameResultDto): import("@prisma/client").Prisma.Prisma__GameResultClient<{
        userID: number;
        stoppingStep: number;
        score: number;
        resultID: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        userID: number;
        stoppingStep: number;
        score: number;
        resultID: number;
    }[]>;
    findOne(resultID: number): import("@prisma/client").Prisma.Prisma__GameResultClient<{
        userID: number;
        stoppingStep: number;
        score: number;
        resultID: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(resultID: number, data: UpdateGameResultDto): import("@prisma/client").Prisma.Prisma__GameResultClient<{
        userID: number;
        stoppingStep: number;
        score: number;
        resultID: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(resultID: number): import("@prisma/client").Prisma.Prisma__GameResultClient<{
        userID: number;
        stoppingStep: number;
        score: number;
        resultID: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
