export class CreateGameResultDto {
  uuid!: string;
  stoppingStep!: number;
  score!: number;
  sessionID: number = 0;
  datasetId: number = 0;
}
