import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateUserProfileDto {
  @IsUUID()
  uuid: string = '0';

  @IsOptional()
  @IsString()
  userName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
