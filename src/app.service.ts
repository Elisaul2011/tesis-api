import { Injectable } from '@nestjs/common';
import * as XlsxPopulate from "xlsx-populate";

export interface IColumns {
  column: string;
  header: string
}

@Injectable()
export class AppService {

  async generateExcelFile(columns: IColumns[], data: any[]): Promise<Buffer> {
    const workbook = await XlsxPopulate.fromBlankAsync();
    const sheet = workbook.sheet(0);

    columns.forEach((column, index) => {
      sheet.cell(1, index + 1).value(column.header);
    });

    data.forEach((row, rowIndex) => {
      columns.forEach((column, colIndex) => {
        sheet.cell(rowIndex + 2, colIndex + 1).value(row[column.column]);
      });
    });

    // Genera el archivo Excel y lo devuelve como un buffer
    return workbook.outputAsync();
  }
}
