import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(userID: number) {
    return this.prisma.user.findUnique({ where: { userID } });
  }

  update(userID: number, data: UpdateUserDto) {
    return this.prisma.user.update({ where: { userID }, data });
  }

  remove(userID: number) {
    return this.prisma.user.delete({ where: { userID } });
  }
}
