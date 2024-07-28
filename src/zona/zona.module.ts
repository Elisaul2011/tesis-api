import { Module } from '@nestjs/common';
import { ZonaController } from './zona.controller';
import { ZonaService } from './zona.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ZonaController],
  providers: [ZonaService, PrismaService]
})
export class ZonaModule {}
