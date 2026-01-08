import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InitUserDto } from './dto/init-user.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 🆕 INIT USER BY UUID
  @Post('init')
  init(@Body() dto: InitUserDto) {
    return this.usersService.initByUuid(dto.uuid);
  }

  // 🆕 UPDATE USER BY UUID
  @Patch('by-uuid/:uuid')
  updateByUuid(@Param('uuid') uuid: string, @Body() dto: UpdateUserProfileDto) {
    return this.usersService.updateByUuid(uuid, dto);
  }

  // EXISTING CRUD
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(Number(id));
  }
}
