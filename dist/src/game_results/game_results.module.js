"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameResultsModule = void 0;
const common_1 = require("@nestjs/common");
const game_results_controller_1 = require("./game_results.controller");
const game_results_service_1 = require("./game_results.service");
const prisma_service_1 = require("../common/prisma.service");
let GameResultsModule = class GameResultsModule {
};
exports.GameResultsModule = GameResultsModule;
exports.GameResultsModule = GameResultsModule = __decorate([
    (0, common_1.Module)({
        controllers: [game_results_controller_1.GameResultsController],
        providers: [game_results_service_1.GameResultsService, prisma_service_1.PrismaService],
    })
], GameResultsModule);
//# sourceMappingURL=game_results.module.js.map