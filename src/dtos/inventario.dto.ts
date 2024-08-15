import { Transform } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsDate, IsNumber, IsString } from "class-validator";

export class DtoCreateInventario {
    @IsNumber()
    almacenesId: number;
    @IsNumber()
    zonaId: number;
    @IsNumber()
    userId: number;
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
    @IsString()
    proveedor: string;
    @Transform(({ value }) => new Date(value))
    @IsDate()
    shelfLife: Date;
    // @IsString()
    // order: string;
    @IsNumber()
    ataId: number;
    // @IsNumber()
    // horasManualesId: number;
    // @IsNumber()
    // necesidadesTecnicasId: number
    // @IsNumber()
    // idHorasManuales: number;
    // @IsNumber()
    // rolId: number;
}

export class DtoUpdateInventario extends DtoCreateInventario {
    @IsNumber()
    idInventario: number;
}

export class DtoAsignInventario {
    @IsArray()
    @ArrayNotEmpty()
    @IsNumber({}, { each: true })
    idInventario: number[];
    @IsNumber()
    typeOrder: number;
    @IsNumber()
    asignTo: number;
    @IsString()
    text: string;
    @IsString()
    order: string;
}