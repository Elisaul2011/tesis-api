import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InspeccionService } from './inspeccion.service';
import { inspeccion, inventario } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { DtoCreateInspeccion, DtoUpdateInspeccion } from 'src/dtos/inspeccion.dto';

@Controller('inspeccion')
export class InspeccionController {

    constructor(private inspeccionService: InspeccionService){}

    @Get()
    async getInspeccion(): Promise<inventario[]> {
        return await this.inspeccionService.getInspeccion();
    }

    @Post()
    async postInspeccion(@Body() newInspeccion: DtoCreateInspeccion): Promise<DtoBaseResponse>{
        return await this.inspeccionService.postInspeccion(newInspeccion);
    }

    @Put()
    async putInspeccion(@Body() inspeccion: DtoUpdateInspeccion): Promise<DtoBaseResponse>{
        return await this.inspeccionService.putInspeccion(inspeccion);
    }

    @Delete('/:id')
    async deleteInspeccion(@Param('id') id: string): Promise<DtoBaseResponse>{
        return await this.inspeccionService.deleteInspeccion(id);
    }

}
