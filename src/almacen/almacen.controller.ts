import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { almacenes, zona } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { DtoCreateAlmacen, DtoUpdateAlmacen } from 'src/dtos/almacen.dto';

@Controller('almacen')
export class AlmacenController {

    constructor(private almacenesService: AlmacenService){}

    @Get()
    async getAlmacenes(): Promise<almacenes[]>{
        return await this.almacenesService.getAlmacen();
    }

    @Post()
    async postAlmacenes(@Body() bodyAlmacen: DtoCreateAlmacen): Promise<DtoBaseResponse>{
        return await this.almacenesService.postAlmacen(bodyAlmacen);
    }

    @Put()
    async putAlmacenes(@Body() bodyAlmacen: DtoUpdateAlmacen): Promise<DtoBaseResponse>{
        return await this.almacenesService.putAlmacen(bodyAlmacen);
    }

    @Delete('/:id')
    async deleteAlmacenes(@Param('id') idAlmacen: string): Promise<DtoBaseResponse>{
        return await this.almacenesService.deleteAlmacen(idAlmacen);
    }
}
