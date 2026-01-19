import { IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreateGameResultDto {
  @IsUUID()
  uuid!: string;

  @IsNumber()
  stoppingStep!: number;

  @IsNumber()
  score!: number;

  @IsOptional()
  @IsNumber()
  sessionID?: number; // <-- optional

  @IsNumber()
  datasetId!: number;
}
