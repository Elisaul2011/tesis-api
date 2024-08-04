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
}

export class DtoUpdateAlmacen extends DtoCreateAlmacen {
    @IsNumber()
    idAlmacenes: number;
}

export class DtoCreateZona{
    @IsString()
    zona: string;
    @IsString()
    descripcionZona: string;
    @IsNumber()
    almacenId: number;
}

export class DtoUpdateZona extends DtoCreateZona {
    @IsNumber()
    idZona: number;
}