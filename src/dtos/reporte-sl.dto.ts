import { IsDate, IsNumber, IsString } from "class-validator";

export class DtoCreateReporte {
    @IsNumber()
    almacenesId: number;
    @IsNumber()
    zonaid: number;
    @IsString()
    pn: string;
    @IsString()
    descripcion: string;
    @IsNumber()
    tipoComponenteId: number;
    @IsString()
    sn: string;
    @IsNumber()
    cantidad: number;
    @IsString()
    lote: string;
    @IsNumber()
    estadoId: number;
    @IsDate()
    shelfLife: Date;
    @IsNumber()
    venceEn: number;
}

export class DtoUpdateReporte extends DtoCreateReporte {
    @IsNumber()
    idReporteShelfLife: number;
}