import { Transform } from "class-transformer";
import { IsDate, IsNumber, IsString } from "class-validator";

export class DtoCreateHistorial {
    @IsNumber()
    inventarioId: number;
    @IsNumber()
    tipoMovimientoId: number;
    @Transform(({ value }) => new Date(value))
    @IsDate()
    fechaMovimiento: Date;
}

export class DtoUpdateHistorial extends DtoCreateHistorial {
    @IsNumber()
    idHistorial: number;
}