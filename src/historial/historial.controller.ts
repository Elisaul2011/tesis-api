import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { HistorialService } from './historial.service';
import { historial } from '@prisma/client';
import { DtoCreateHistorial, DtoUpdateHistorial } from 'src/dtos/historial.dto';
import { DtoBaseResponse } from 'src/dtos/base-response';

@Controller('historial')
export class HistorialController {

    constructor(private historialService: HistorialService){}

    @Get()
    async getHistorial(): Promise<historial[]> {
        return await this.historialService.getHistorial();
    }

    @Get('/imprimir')
    async generateExcelInvenory(@Res() res): Promise<void> {

        const buffer = await this.historialService.generateExcelHistory();
        res.setHeader('Content-Disposition', 'attachment; filename=report.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buffer);
    }
}
