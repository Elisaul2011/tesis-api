import { IsNumber } from "class-validator";

export class DtoCreateReporte {
    @IsNumber()
    idReporteShelfLife: number;
    @IsNumber()
    inventarioId: number;
    @IsNumber()
    venceEn: number;
}

export class DtoUpdateReporte extends DtoCreateReporte {
    @IsNumber()
    idReporteShelfLife: number;
}