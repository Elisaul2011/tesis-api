import { Injectable } from '@nestjs/common';
import { inventario } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlmacenService {

    constructor(private prismaService: PrismaService){}

    async getAlmacen(): Promise<inventario[]> {
        return await this.prismaService.inventario.findMany()
    }

}
