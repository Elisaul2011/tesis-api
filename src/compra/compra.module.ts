
import { Module } from '@nestjs/common';
import { CompraController } from './compra.controller';
import { CompraService } from './compra.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { HistorialService } from 'src/historial/historial.service';
import { AppService } from 'src/app.service';

@Module({
  controllers: [CompraController],
  providers: [CompraService, PrismaService, HistorialService, AppService]
})
export class CompraModule {}
