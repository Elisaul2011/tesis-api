import { Module } from '@nestjs/common';
import { InspeccionController } from './inspeccion.controller';
import { InspeccionService } from './inspeccion.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { HistorialService } from 'src/historial/historial.service';

@Module({
  controllers: [InspeccionController],
  providers: [InspeccionService, PrismaService, HistorialService]
})
export class InspeccionModule {}
