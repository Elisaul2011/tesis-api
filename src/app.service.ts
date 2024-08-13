import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import * as XlsxPopulate from "xlsx-populate";
@Injectable()
export class AppService {

  async generateExcelFile(columns: string[], data: any[]): Promise<Buffer> {
    const workbook = await XlsxPopulate.fromBlankAsync();
    const sheet = workbook.sheet(0);

    columns.forEach((column, index) => {
      sheet.cell(1, index + 1).value(column);
    });

    data.forEach((row, rowIndex) => {
      columns.forEach((column, colIndex) => {
        sheet.cell(rowIndex + 2, colIndex + 1).value(row[column]);
      });
    });

    // Agrega datos a la hoja
    // sheet.cell('A1').value('Nombre');
    // sheet.cell('B1').value('Edad');
    // sheet.cell('A2').value('Juan');
    // sheet.cell('B2').value(30);
    // sheet.cell('A3').value('María');
    // sheet.cell('B3').value(25);

    // Genera el archivo Excel y lo devuelve como un buffer
    return workbook.outputAsync();
  }
}
