import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InspeccionService } from './inspeccion.service';
import { inventario } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { DtoUpdateInspeccion } from 'src/dtos/inspeccion.dto';

@Controller('inspeccion')
export class InspeccionController {

    constructor(private inspeccionService: InspeccionService) { }

    @Get()
    async getInspeccion(): Promise<inventario[]> {
        return await this.inspeccionService.getInspeccion();
    }

    @Put()
    async putInspeccion(@Body() inspeccion: DtoUpdateInspeccion): Promise<DtoBaseResponse> {
        return await this.inspeccionService.putInspeccion(inspeccion);
    }
}
