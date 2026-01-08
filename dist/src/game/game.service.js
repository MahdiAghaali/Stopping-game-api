"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameService = void 0;
const common_1 = require("@nestjs/common");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const csv_parser_1 = __importDefault(require("csv-parser"));
let GameService = class GameService {
    registryPath = path.join(process.cwd(), 'src', 'series_registry.csv');
    dataDir = path.join(process.cwd(), 'data');
    async loadFilesByIds(ids) {
        const registry = await this.readRegistry();
        const idSet = new Set(ids);
        const selectedEntries = registry.filter((r) => idSet.has(r.id));
        const results = [];
        for (const entry of selectedEntries) {
            const filePath = path.join(this.dataDir, entry.filename);
            const rows = await this.readCsvFile(filePath);
            results.push({
                ...entry,
                rows,
            });
        }
        return results;
    }
    readRegistry() {
        return new Promise((resolve, reject) => {
            const rows = [];
            fs.createReadStream(this.registryPath)
                .pipe((0, csv_parser_1.default)())
                .on('data', (data) => {
                rows.push({
                    id: Number(data.id),
                    dataset: data.dataset,
                    method: data.method,
                    method_confidence_level: data.method_confidence_level,
                    method_bias: data.method_bias,
                    method_recall_target: data.method_recall_target,
                    filename: data.filename,
                    row_count: Number(data.row_count),
                    rows: undefined,
                });
            })
                .on('end', () => resolve(rows))
                .on('error', reject);
        });
    }
    readCsvFile(filePath) {
        return new Promise((resolve, reject) => {
            const rows = [];
            fs.createReadStream(filePath)
                .pipe((0, csv_parser_1.default)())
                .on('data', (data) => rows.push(data))
                .on('end', () => resolve(rows))
                .on('error', reject);
        });
    }
};
exports.GameService = GameService;
exports.GameService = GameService = __decorate([
    (0, common_1.Injectable)()
], GameService);
//# sourceMappingURL=game.service.js.map