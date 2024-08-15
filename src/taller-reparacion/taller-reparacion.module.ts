import { Module } from '@nestjs/common';
import { TallerReparacionController } from './taller-reparacion.controller';
import { TallerReparacionService } from './taller-reparacion.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { HistorialService } from 'src/historial/historial.service';
import { AppService } from 'src/app.service';

@Module({
  controllers: [TallerReparacionController],
  providers: [TallerReparacionService, PrismaService, HistorialService, AppService]
})
export class TallerReparacionModule {}
