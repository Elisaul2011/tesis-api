import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { zona } from '@prisma/client';
import { ZonaService } from './zona.service';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { DtoCreateZona, DtoUpdateZona } from 'src/dtos/almacen.dto';

@Controller('zona')
export class ZonaController {

    constructor(private zonaService: ZonaService){}

    @Get()
    async getZonas(): Promise<zona[]> {
        return await this.zonaService.getZonas();
    }

    @Post()
    async postZonas(@Body() bodyZona: DtoCreateZona): Promise<DtoBaseResponse>{
        return await this.zonaService.postZonas(bodyZona);
    }
    @Put()
    async putZonas(@Body() bodyZona: DtoUpdateZona): Promise<DtoBaseResponse>{
        return await this.zonaService.putZona(bodyZona);
    }

    @Delete('/:idZona')
    async deleteZonas(@Param('idZona') idZona: string): Promise<DtoBaseResponse>{
        return await this.zonaService.deleteZonas(idZona);
    }
}
