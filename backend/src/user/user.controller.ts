import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('user')
export class UserController {
  constructor(private prisma: PrismaService) {}

  @Get('all')
  async getUsers() {
    return await this.prisma.user.findMany();
  }
}
