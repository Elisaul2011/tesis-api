import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { MainLoadModule } from './main-load/main-load.module';
import { AlmacenModule } from './almacen/almacen.module';
import { ZonaModule } from './zona/zona.module';
import { InventarioModule } from './inventario/inventario.module';
import { AeronaveModule } from './aeronave/aeronave.module';
import { TallerReparacionModule } from './taller-reparacion/taller-reparacion.module';
import { InspeccionModule } from './inspeccion/inspeccion.module';
import { NecesidadesTecnicasModule } from './necesidades-tecnicas/necesidades-tecnicas.module';
import { ReporteSlModule } from './reporte-sl/reporte-sl.module';
import { HistorialModule } from './historial/historial.module';
import { CompraModule } from './compra/compra.module';
import { TipoComponenteModule } from './tipo-componente/tipo-componente.module';
import { AuthModule } from './auth/auth.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [UsersModule, MainLoadModule, AlmacenModule, ZonaModule, InventarioModule, AeronaveModule, TallerReparacionModule, InspeccionModule, NecesidadesTecnicasModule, ReporteSlModule, HistorialModule, CompraModule, TipoComponenteModule, AuthModule, NotificationsModule],
  providers: [PrismaService],
})
export class AppModule {}
