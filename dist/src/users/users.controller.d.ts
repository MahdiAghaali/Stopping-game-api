import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InitUserDto } from './dto/init-user.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    init(dto: InitUserDto): Promise<{
        results: {
            createdAt: Date;
            updatedAt: Date;
            userID: number;
            resultID: number;
            sessionID: number;
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
    updateByUuid(uuid: string, dto: UpdateUserProfileDto): import("@prisma/client").Prisma.Prisma__UserClient<{
        uuid: string;
        userName: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        userID: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(dto: CreateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<{
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        uuid: string;
        userName: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        userID: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<{
        uuid: string;
        userName: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        userID: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        uuid: string;
        userName: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        userID: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
