import { Module } from '@nestjs/common';
import { InventarioController } from './inventario.controller';
import { InventarioService } from './inventario.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { HistorialService } from 'src/historial/historial.service';

@Module({
  controllers: [InventarioController],
  providers: [InventarioService, PrismaService, HistorialService]
})
export class InventarioModule {}
