import { Module } from '@nestjs/common';
import { InspeccionController } from './inspeccion.controller';
import { InspeccionService } from './inspeccion.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { HistorialService } from 'src/historial/historial.service';
import { AppService } from 'src/app.service';

@Module({
  controllers: [InspeccionController],
  providers: [InspeccionService, PrismaService, HistorialService, AppService]
})
export class InspeccionModule {}
