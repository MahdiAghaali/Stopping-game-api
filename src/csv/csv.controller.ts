import { Controller, Get, BadRequestException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import csv from 'csv-parser';

@Controller('csv')
export class CsvController {
  @Get('getRegistry')
  async readCsv() {
    const RegistryName = 'series_registry.csv';
    if (!RegistryName) {
      throw new BadRequestException('Query parameter "file" is required');
    }

    const filePath = path.join(process.cwd(), 'src', RegistryName); // adjust directory

    if (!fs.existsSync(filePath)) {
      throw new BadRequestException(`File not found: ${RegistryName}`);
    }

    return new Promise((resolve, reject) => {
      const results = [];

      fs.createReadStream(filePath)
        .pipe(csv())
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
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
