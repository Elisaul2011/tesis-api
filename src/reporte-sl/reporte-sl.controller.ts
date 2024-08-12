import { reporteshelflife } from '@prisma/client';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReporteSlService } from './reporte-sl.service';
import { DtoCreateReporte, DtoUpdateReporte } from 'src/dtos/reporte-sl.dto';
import { DtoBaseResponse } from 'src/dtos/base-response';

@Controller('reporte-sl')
export class ReporteSlController {

    constructor(private reporteService: ReporteSlService){}

    @Get()
    async getReporte(): Promise<reporteshelflife[]> {
        return await this.reporteService.getReporte();
    }
}
