import { IsDate, IsNumber, IsString } from "class-validator";

export class DtoCreateHistorial {
    @IsNumber()
    idHistorial: number;
    @IsNumber()
    inventarioId: number;
    @IsNumber()
    inspeccionId: number;
    @IsNumber()
    ordenCompraId: number;
    @IsNumber()
    aeronaveId: number;
    @IsNumber()
    tallerId: number;
    @IsNumber()
    userId: number;
    @IsNumber()
    tipoMovimientoId: number;
}

export class DtoUpdateHistorial extends DtoCreateHistorial {
    @IsNumber()
    idHistorial: number;
}