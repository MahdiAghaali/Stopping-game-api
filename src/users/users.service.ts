import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // EXISTING
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

  // 🆕 INIT BY UUID
  async initByUuid(uuid: string) {
    const user = await this.prisma.user.findUnique({
      where: { uuid },
      include: {
        sessions: true,
        results: true,
      },
    });

    if (user) return user;

    // Generate guest name
    const count = await this.prisma.user.count();
    const guestName = `Guest user ${count + 1}`;

    return this.prisma.user.create({
      data: {
        uuid,
        userName: guestName,
      },
      include: {
        sessions: true,
        results: true,
      },
    });
  }

  // 🆕 UPDATE BY UUID
  updateByUuid(
    uuid: string,
    data: Partial<{ userName: string; email: string }>,
  ) {
    return this.prisma.user.update({
      where: { uuid },
      data,
    });
  }
}
