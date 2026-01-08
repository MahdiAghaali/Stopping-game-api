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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameResultsController = void 0;
const common_1 = require("@nestjs/common");
const game_results_service_1 = require("./game_results.service");
const create_game_result_dto_1 = require("./dto/create-game_result.dto");
const update_game_result_dto_1 = require("./dto/update-game_result.dto");
let GameResultsController = class GameResultsController {
    resultService;
    constructor(resultService) {
        this.resultService = resultService;
    }
    create(dto) {
        return this.resultService.create(dto);
    }
    findAll() {
        return this.resultService.findAll();
    }
    findOne(id) {
        return this.resultService.findOne(Number(id));
    }
    update(id, dto) {
        return this.resultService.update(Number(id), dto);
    }
    remove(id) {
        return this.resultService.remove(Number(id));
    }
};
exports.GameResultsController = GameResultsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_game_result_dto_1.CreateGameResultDto]),
    __metadata("design:returntype", void 0)
], GameResultsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GameResultsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GameResultsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_game_result_dto_1.UpdateGameResultDto]),
    __metadata("design:returntype", void 0)
], GameResultsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GameResultsController.prototype, "remove", null);
exports.GameResultsController = GameResultsController = __decorate([
    (0, common_1.Controller)('gameResults'),
    __metadata("design:paramtypes", [game_results_service_1.GameResultsService])
], GameResultsController);
//# sourceMappingURL=game_results.controller.js.map