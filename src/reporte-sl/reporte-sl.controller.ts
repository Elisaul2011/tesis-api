import { inventario } from '@prisma/client';
import { Controller, Get, Res } from '@nestjs/common';
import { ReporteSlService } from './reporte-sl.service';

@Controller('reporte-sl')
export class ReporteSlController {

    constructor(private reporteService: ReporteSlService){}

    @Get()
    async getReporte(): Promise<inventario[]> {
        return await this.reporteService.getReporte();
    }
    
    @Get('/imprimir')
    async generateExcelInvenory(@Res() res): Promise<void> {

        const buffer = await this.reporteService.generateExcelReport();
        res.setHeader('Content-Disposition', 'attachment; filename=report.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buffer);
    }
}
