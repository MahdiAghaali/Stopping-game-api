"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameResultsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma.service");
let GameResultsService = class GameResultsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const user = await this.prisma.user.findUnique({
            where: { uuid: data.uuid },
        });
        if (!user) {
            throw new Error(`User '${data.uuid}' not found`);
        }
        return this.prisma.gameResult.create({
            data: {
                userID: user.userID,
                sessionID: data.sessionID,
                datasetId: data.datasetId,
                stoppingStep: data.stoppingStep,
                score: data.score,
            },
        });
    }
    findAll() {
        return this.prisma.gameResult.findMany();
    }
    findOne(resultID) {
        return this.prisma.gameResult.findUnique({ where: { resultID } });
    }
    update(resultID, data) {
        return this.prisma.gameResult.update({ where: { resultID }, data });
    }
    remove(resultID) {
        return this.prisma.gameResult.delete({ where: { resultID } });
    }
};
exports.GameResultsService = GameResultsService;
exports.GameResultsService = GameResultsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GameResultsService);
//# sourceMappingURL=game_results.service.js.map