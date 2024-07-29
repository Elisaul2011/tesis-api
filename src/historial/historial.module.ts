import { Module } from '@nestjs/common';
import { HistorialController } from './historial.controller';
import { HistorialService } from './historial.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [HistorialController],
  providers: [HistorialService, PrismaService]
})
export class HistorialModule {}
