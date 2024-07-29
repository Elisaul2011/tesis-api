import { reporteShelfLife } from '@prisma/client';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReporteSlService } from './reporte-sl.service';
import { DtoCreateReporte, DtoUpdateReporte } from 'src/dtos/reporte-sl.dto';
import { DtoBaseResponse } from 'src/dtos/base-response';

@Controller('reporte-sl')
export class ReporteSlController {

    constructor(private reporteService: ReporteSlService){}

    @Get()
    async getReporte(): Promise<reporteShelfLife[]> {
        return await this.reporteService.getReporte();
    }

    @Post()
    async postReporte(@Body() newReporte: DtoCreateReporte): Promise<DtoBaseResponse>{
        return await this.reporteService.postReporte(newReporte);
    }

    @Put()
    async putReporte(@Body() reporteShelfLife: DtoUpdateReporte): Promise<DtoBaseResponse>{
        return await this.reporteService.putReporte(reporteShelfLife);
    }

    @Delete('/:id')
    async deleteReporte(@Param('id') id: string): Promise<DtoBaseResponse>{
        return await this.reporteService.deleteReporte(id);
    }

}
