import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import csv from 'csv-parser';

export type DatasetT = {
  id: number;
  dataset: string;
  method: string;
  method_confidence_level: number | 'nan' | 'none';
  method_bias: number | 'nan' | 'none';
  method_recall_target: number | 'nan' | 'none';
  filename: string;
  row_count: number;
  rows: unknown;
};

@Injectable()
export class GameService {
  private registryPath =
    process.env.REGISTRY ??
    path.join(process.cwd(), 'src', 'series_registry.csv');

  private readonly dataDir = path.join(
    process.env.RESULTS_DIR ?? 'data/results/',
  );

  async loadFilesByIds(ids: number[]) {
    const registry = await this.readRegistry();
    const idSet = new Set(ids);

    const selectedEntries = registry.filter((r) => idSet.has(r.id));

    const results: DatasetT[] = [];

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

  // -------------------------
  // Helpers
  // -------------------------

  private readRegistry(): Promise<DatasetT[]> {
    return new Promise((resolve, reject) => {
      const rows: DatasetT[] = [];

      fs.createReadStream(this.registryPath)
        .pipe(csv())
        .on('data', (data: DatasetT) => {
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

  private readCsvFile(filePath: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const rows: any[] = [];

      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => rows.push(data))
        .on('end', () => resolve(rows))
        .on('error', reject);
    });
  }
}
