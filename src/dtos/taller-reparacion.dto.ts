import { IsNumber, IsString } from "class-validator";

export class DtoCreateTallerReparacion {
    @IsString()
    taller: string;
    @IsNumber()
    inventarioId: number;
    @IsString()
    workshopOrder: string;
}

export class DtoUpdateTallerReparacion extends DtoCreateTallerReparacion {
    @IsNumber()
    idTaller: number;
}