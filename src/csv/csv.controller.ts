import { Controller, Get, BadRequestException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import csv from 'csv-parser';

@Controller('csv')
export class CsvController {
  @Get('getRegistry')
  async readCsv() {
    const RegistryName =
      process.env.REGISTRY ??
      path.join(process.cwd(), 'src', 'series_registry.csv');
    if (!RegistryName) {
      throw new BadRequestException('Query parameter "file" is required');
    }

    if (!fs.existsSync(RegistryName)) {
      throw new BadRequestException(`File not found: ${RegistryName}`);
    }

    return new Promise((resolve, reject) => {
      const results = [];

      fs.createReadStream(RegistryName)
        .pipe(csv())
        .on('data', (data) => results.push(data as never))
        .on('end', () => {
          resolve(results);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }
}
