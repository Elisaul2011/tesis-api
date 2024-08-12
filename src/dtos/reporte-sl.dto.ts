import { IsNumber } from "class-validator";

export class DtoCreateReporte {
    @IsNumber()
    inventarioId: number;
}

export class DtoUpdateReporte extends DtoCreateReporte {
    @IsNumber()
    idReporteShelfLife: number;
}