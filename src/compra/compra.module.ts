
import { Module } from '@nestjs/common';
import { CompraController } from './compra.controller';
import { CompraService } from './compra.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { HistorialService } from 'src/historial/historial.service';

@Module({
  controllers: [CompraController],
  providers: [CompraService, PrismaService, HistorialService]
})
export class CompraModule {}
