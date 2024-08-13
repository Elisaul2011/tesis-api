import { Transform } from "class-transformer";
import { IsDate, IsNumber, IsString } from "class-validator";

export class DtoCreateHistorial {
    @IsNumber()
    inventarioId: number;
    @IsNumber()
    tipoMovimientoId: number;
}

export class DtoUpdateHistorial extends DtoCreateHistorial {
    @IsNumber()
    idHistorial: number;
}