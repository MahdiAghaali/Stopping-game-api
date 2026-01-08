import { IsUUID } from 'class-validator';

export class InitUserDto {
  @IsUUID()
  uuid: string = '0';
}
