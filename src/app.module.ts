import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { MainLoadModule } from './main-load/main-load.module';

@Module({
  imports: [UsersModule, MainLoadModule],
  providers: [PrismaService],
})
export class AppModule {}
