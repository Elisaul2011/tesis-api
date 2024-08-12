import { inventario } from '@prisma/client';
import { Controller, Get } from '@nestjs/common';
import { ReporteSlService } from './reporte-sl.service';

@Controller('reporte-sl')
export class ReporteSlController {

    constructor(private reporteService: ReporteSlService){}

    @Get()
    async getReporte(): Promise<inventario[]> {
        return await this.reporteService.getReporte();
    }
}
