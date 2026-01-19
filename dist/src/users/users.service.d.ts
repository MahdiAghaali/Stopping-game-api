import { PrismaService } from '../common/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<{
        uuid: string;
        userName: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        userID: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        uuid: string;
        userName: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        userID: number;
    }[]>;
    findOne(userID: number): import("@prisma/client").Prisma.Prisma__UserClient<{
        uuid: string;
        userName: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        userID: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(userID: number, data: UpdateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<{
        uuid: string;
        userName: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        userID: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(userID: number): import("@prisma/client").Prisma.Prisma__UserClient<{
        uuid: string;
        userName: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        userID: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    initByUuid(uuid: string): Promise<{
        results: {
            createdAt: Date;
            updatedAt: Date;
            userID: number;
            resultID: number;
            sessionID: number | null;
            datasetId: number;
            stoppingStep: number;
            score: number;
        }[];
        sessions: {
            createdAt: Date;
            updatedAt: Date;
            sessionID: number;
            ownerID: number;
            settings: import("@prisma/client/runtime/library").JsonValue;
            playersData: import("@prisma/client/runtime/library").JsonValue;
            isSessionStarted: boolean;
            isSessionEnded: boolean;
        }[];
    } & {
        uuid: string;
        userName: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        userID: number;
    }>;
    updateByUuid(uuid: string, data: Partial<{
        userName: string;
        email: string;
    }>): import("@prisma/client").Prisma.Prisma__UserClient<{
        uuid: string;
        userName: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        userID: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
