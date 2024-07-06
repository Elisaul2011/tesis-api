import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { MainLoadModule } from './main-load/main-load.module';
import { AlmacenModule } from './almacen/almacen.module';

@Module({
  imports: [UsersModule, MainLoadModule, AlmacenModule],
  providers: [PrismaService],
})
export class AppModule {}
