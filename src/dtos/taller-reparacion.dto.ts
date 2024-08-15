import { IsNumber, IsString } from "class-validator";

export class DtoCreateTallerReparacion {
    @IsNumber()
    inventarioId: number;
    @IsNumber()
    madeBy: number;
}

export class DtoUpdateTallerReparacion extends DtoCreateTallerReparacion {
    @IsNumber()
    idTaller: number;
}