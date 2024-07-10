import { IsNumber, IsString } from "class-validator";

export class DtoCreateAlmacen {
    @IsString()
    ciudad: string;
    @IsString()
    descripcion: string;
    @IsNumber()
    estado: number;
    @IsString()
    pais: string;
    @IsString()
    nombre: string;
    @IsNumber()
    zonaId: number;
}

export class DtoUpdateAlmacen extends DtoCreateAlmacen {
    @IsNumber()
    idAlmacenes: number;
}