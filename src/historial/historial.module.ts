import { Module } from '@nestjs/common';
import { HistorialController } from './historial.controller';
import { HistorialService } from './historial.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppService } from 'src/app.service';

@Module({
  controllers: [HistorialController],
  providers: [HistorialService, PrismaService, AppService]
})
export class HistorialModule {}
