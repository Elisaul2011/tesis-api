import { BadRequestException, Injectable } from '@nestjs/common';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MainLoadService {

    constructor(private prismaService: PrismaService){}

    async generateAllData(): Promise<DtoBaseResponse> {
        const createAtas = await this.prismaService.atas.createMany({
            data:[
                {
                    CodigoAta: "ATA 00",
                    NombreATA: "GENERAL"
                },
                {
                    CodigoAta: "ATA 01",
                    NombreATA: "POLÍTICA DE MANTENIMIENTO"
                },
                {
                    CodigoAta: "ATA 02",
                    NombreATA: "PESO Y BALANCE"
                },
                {
                    CodigoAta: "ATA 03",
                    NombreATA: "EQUIPOS MINIMOS"
                },
                {
                    CodigoAta: "ATA 04",
                    NombreATA: "LIMITACIONES DE AERONAVEGABILIDAD"
                },
                {
                    CodigoAta: "ATA 05",
                    NombreATA: "LÍMITES DE TIEMPO/CONTROLES DE MANTENIMIENTO"
                },
                {
                    CodigoAta: "ATA 06",
                    NombreATA: "DIMENSIONES Y SUPERFICIES"
                },
                {
                    CodigoAta: "ATA 07",
                    NombreATA: "LEVANTAMIENTO, APUNTALAMIENTO Y SOPORTE"
                },
                {
                    CodigoAta: "ATA 08",
                    NombreATA: "PESO Y BALANCE"
                },
                {
                    CodigoAta: "ATA 09",
                    NombreATA: "REMOLQUE Y RODAJE"
                },
                {
                    CodigoAta: "ATA 10",
                    NombreATA: "APARCAMIENTO, AMARRE, ALMACENAMIENTO Y VUELTA AL SERVICIO"
                },
                {
                    CodigoAta: "ATA 11",
                    NombreATA: "LETREROS Y SEÑALES"
                },
                {
                    CodigoAta: "ATA 12",
                    NombreATA: "SERVICIO – MANTENIMIENTO RUTINARIO"
                },
                {
                    CodigoAta: "ATA 13",
                    NombreATA: "HARDWARE Y HERRAMIENTAS GENERALES"
                },
                {
                    CodigoAta: "ATA 14",
                    NombreATA: "HERRAMIENTAS"
                },
                {
                    CodigoAta: "ATA 15",
                    NombreATA: "ENTRENAMIENTOS EXTERNOS"
                },
                {
                    CodigoAta: "ATA 16",
                    NombreATA: "EQUIPO DE SOPORTE EN TIERRA"
                },
                {
                    CodigoAta: "ATA 17",
                    NombreATA: "EQUIPO AUXILIAR"
                },
                {
                    CodigoAta: "ATA 18",
                    NombreATA: "VIBRACIÓN"
                },
                {
                    CodigoAta: "ATA 19",
                    NombreATA: "COMBUSTIBLE"
                },
                {
                    CodigoAta: "ATA 20",
                    NombreATA: "PRÁCTICAS ESTANDAR"
                },
                {
                    CodigoAta: "ATA 21",
                    NombreATA: "AIRE ACONDICIONADO Y PRESURIZACIÓN"
                },
                {
                    CodigoAta: "ATA 22",
                    NombreATA: "PILOTO AUTOMÁTICO"
                },
                {
                    CodigoAta: "ATA 23",
                    NombreATA: "COMUNICACIONES"
                },
                {
                    CodigoAta: "ATA 24",
                    NombreATA: "SISTEMA ELECTRICO"
                },
                {
                    CodigoAta: "ATA 25",
                    NombreATA: "EQUIPO Y ACCESORIOS"
                },
                {
                    CodigoAta: "ATA 26",
                    NombreATA: "PROTECCIÓN CONTRA EL FUEGO"
                },
                {
                    CodigoAta: "ATA 27",
                    NombreATA: "CONTROLES DE VUELO"
                },
                {
                    CodigoAta: "ATA 28",
                    NombreATA: "COMBUSTIBLE"
                },
                {
                    CodigoAta: "ATA 29",
                    NombreATA: "SISTEMA HIDRÁULICO"
                },
                {
                    CodigoAta: "ATA 30",
                    NombreATA: "PROTECCIÓN CONTRA HIELO Y LLUVIA"
                },
                {
                    CodigoAta: "ATA 31",
                    NombreATA: "SISTEMAS DE INDICACIÓN Y GRABACIÓN"
                },
                {
                    CodigoAta: "ATA 32",
                    NombreATA: "TREN DE ATERRIZAJE"
                },
                {
                    CodigoAta: "ATA 33",
                    NombreATA: "LUCES"
                },
                {
                    CodigoAta: "ATA 34",
                    NombreATA: "NAVEGACIÓN"
                },
                {
                    CodigoAta: "ATA 35",
                    NombreATA: "OXÍGENO"
                },
                {
                    CodigoAta: "ATA 36",
                    NombreATA: "SISTEMA NEUMÁTICO"
                },
                {
                    CodigoAta: "ATA 37",
                    NombreATA: "PRESIÓN Y VACÍO"
                },
                {
                    CodigoAta: "ATA 38",
                    NombreATA: "AGUA / DESECHOS"
                },
                {
                    CodigoAta: "ATA 39",
                    NombreATA: "PANELES ELÉCTRICO-ELECTRÓNICOS Y COMPONENTES MULTIUSO"
                },
                {
                    CodigoAta: "ATA 40",
                    NombreATA: "MULTISISTEMA"
                },
                {
                    CodigoAta: "ATA 41",
                    NombreATA: "AGUA / LASTRE"
                },
                {
                    CodigoAta: "ATA 42",
                    NombreATA: "AVIÓNICA MODULAR INTEGRADA"
                },
                {
                    CodigoAta: "ATA 44",
                    NombreATA: "SISTEMAS DE CABINA"
                },
                {
                    CodigoAta: "ATA 45",
                    NombreATA: "SISTEMA DE DIAGNÓSTICO Y MANTENIMIENTO"
                },
                {
                    CodigoAta: "ATA 46",
                    NombreATA: "SISTEMAS DE INFORMACIÓN"
                },
                {
                    CodigoAta: "ATA 47",
                    NombreATA: "SISTEMA DE GENERACIÓN DE NITRÓGENO"
                },
                {
                    CodigoAta: "ATA 48",
                    NombreATA: "DISPENSACIÓN DE COMBUSTIBLE EN VUELO"
                },
                {
                    CodigoAta: "ATA 49",
                    NombreATA: "UNIDAD DE POTENCIA AUXILIAR"
                },
                {
                    CodigoAta: "ATA 50",
                    NombreATA: "COMPARTIMENTOS DE CARGA Y ACCESORIOS"
                },
                {
                    CodigoAta: "ATA 51",
                    NombreATA: "PRÁCTICAS ESTÁNDAR Y ESTRUCTURAS – GENERAL"
                },
                {
                    CodigoAta: "ATA 52",
                    NombreATA: "PUERTAS"
                },
                {
                    CodigoAta: "ATA 53",
                    NombreATA: "FUSELAJE"
                },
                {
                    CodigoAta: "ATA 54",
                    NombreATA: "GÓNDOLAS / PILONES"
                },
                {
                    CodigoAta: "ATA 55",
                    NombreATA: "ESTABILIZADORES"
                },
                {
                    CodigoAta: "ATA 56",
                    NombreATA: "VENTANAS"
                },
                {
                    CodigoAta: "ATA 57",
                    NombreATA: "ALAS"
                },
                {
                    CodigoAta: "ATA 60",
                    NombreATA: "ESTÁNDARES PRÁCTICOS – HÉLICE/ROTOR"
                },
                {
                    CodigoAta: "ATA 61",
                    NombreATA: "HELICES Y PROPULSORES"
                },
                {
                    CodigoAta: "ATA 62",
                    NombreATA: "ROTOR(ES) PRINCIPAL(ES)"
                },
                {
                    CodigoAta: "ATA 63",
                    NombreATA: "IMPULSOR DEL ROTOR"
                },
                {
                    CodigoAta: "ATA 64",
                    NombreATA: "ROTOR DE COLA"
                },
                {
                    CodigoAta: "ATA 65",
                    NombreATA: "EMPUJE DEL ROTOR DE COLA"
                },
                {
                    CodigoAta: "ATA 66",
                    NombreATA: "PALAS PLEGABLES/PILONES"
                },
                {
                    CodigoAta: "ATA 67",
                    NombreATA: "CONTROL EN VUELO DE LOS ROTORES"
                },
                {
                    CodigoAta: "ATA 70",
                    NombreATA: "ESTÁNDARES PRÁCTICOS DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 71",
                    NombreATA: "PLANTA MOTRIZ"
                },
                {
                    CodigoAta: "PTOS",
                    NombreATA: ""
                },
                {
                    CodigoAta: "ATA 72",
                    NombreATA: "MOTORES DE TURBINAS/TURBOPROPULSORES"
                },
                {
                    CodigoAta: "ATA 73",
                    NombreATA: "CONTROL Y GESTIÓN DEL COMBUSTIBLE DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 74",
                    NombreATA: "IGNICIÓN DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 75",
                    NombreATA: "PURGA DEL AIRE"
                },
                {
                    CodigoAta: "ATA 76",
                    NombreATA: "CONTROLES DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 77",
                    NombreATA: "INDICADORES DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 78",
                    NombreATA: "SISTEMA DE ESCAPE DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 79",
                    NombreATA: "ACEITE DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 80",
                    NombreATA: "ARRANQUE DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 81",
                    NombreATA: "SISTEMA DE TURBINA (MOTOR RECIPROCO)"
                },
                {
                    CodigoAta: "ATA 82",
                    NombreATA: "INYECCIÓN DE AGUA"
                },
                {
                    CodigoAta: "ATA 83",
                    NombreATA: "CAJA DE ENGRANAJES"
                },
                {
                    CodigoAta: "ATA 84",
                    NombreATA: "INCREMENTO DE LA PROPULSIÓN"
                },
                {
                    CodigoAta: "ATA 85",
                    NombreATA: "SISTEMAS DE CELDAS DE COMBUSTIBLE"
                },
                {
                    CodigoAta: "ATA 91",
                    NombreATA: "GRÁFICAS"
                },
                {
                    CodigoAta: "ATA 92",
                    NombreATA: "INSTALACIÓN DEL SISTEMA ELÉCTRICO"
                }
            ]
        });

        const createRoles = await this.prismaService.roles.createMany({
            data: [
                {
                    rol: 'Almacenista'
                },
                {
                    rol: 'Inspector'
                },
                {
                    rol: 'Técnico'
                },
                {
                    rol: 'Jefe de almacén'
                }
            ]
        });

        const createUsers = await this.prismaService.user.createMany({
            data: [
                {
                    nameUser: 'Eduardo',
                    lastnameUser: 'Uribe',
                    rolId: 1,
                    password: '12345'
                },
                {
                    nameUser: 'Luis',
                    lastnameUser: 'Nava',
                    rolId: 2,
                    password: '12345'
                },
                {
                    nameUser: 'Saulo',
                    lastnameUser: 'Ortega',
                    rolId: 3,
                    password: '12345'
                },
                {
                    nameUser: 'José',
                    lastnameUser: 'Urdaneta',
                    rolId: 4,
                    password: 'admin123'
                },
            ]
        });

        const createTypesComponents = await this.prismaService.typeComponents.createMany({
            data: [
                {
                    typeComponent: 'Consumibles'
                },
                {
                    typeComponent: 'Consumibles Serializado'
                },
                {
                    typeComponent: 'Equipo'
                },
                {
                    typeComponent: 'Herramienta'
                },
                {
                    typeComponent: 'Motor'
                },
                {
                    typeComponent: 'Propela'
                },
                {
                    typeComponent: 'Rotable'
                },
            ]
        });

        if(!createRoles){
            throw new BadRequestException('Se produjo un error.');
        }

        if(!createUsers){
            throw new BadRequestException('Se produjo un error.');
        }

        if(!createTypesComponents){
            throw new BadRequestException('Se produjo un error.');
        }

        if(!createAtas){
            throw new BadRequestException('Se produjo un error.');
        }

        baseResponse.message = 'Se han creado los datos.';

        return baseResponse;
    }

    async generateAtas(): Promise<DtoBaseResponse> {
        const createAtas = await this.prismaService.atas.createMany({
            data:[
                {
                    CodigoAta: "ATA 00",
                    NombreATA: "GENERAL"
                },
                {
                    CodigoAta: "ATA 01",
                    NombreATA: "POLÍTICA DE MANTENIMIENTO"
                },
                {
                    CodigoAta: "ATA 02",
                    NombreATA: "PESO Y BALANCE"
                },
                {
                    CodigoAta: "ATA 03",
                    NombreATA: "EQUIPOS MINIMOS"
                },
                {
                    CodigoAta: "ATA 04",
                    NombreATA: "LIMITACIONES DE AERONAVEGABILIDAD"
                },
                {
                    CodigoAta: "ATA 05",
                    NombreATA: "LÍMITES DE TIEMPO/CONTROLES DE MANTENIMIENTO"
                },
                {
                    CodigoAta: "ATA 06",
                    NombreATA: "DIMENSIONES Y SUPERFICIES"
                },
                {
                    CodigoAta: "ATA 07",
                    NombreATA: "LEVANTAMIENTO, APUNTALAMIENTO Y SOPORTE"
                },
                {
                    CodigoAta: "ATA 08",
                    NombreATA: "PESO Y BALANCE"
                },
                {
                    CodigoAta: "ATA 09",
                    NombreATA: "REMOLQUE Y RODAJE"
                },
                {
                    CodigoAta: "ATA 10",
                    NombreATA: "APARCAMIENTO, AMARRE, ALMACENAMIENTO Y VUELTA AL SERVICIO"
                },
                {
                    CodigoAta: "ATA 11",
                    NombreATA: "LETREROS Y SEÑALES"
                },
                {
                    CodigoAta: "ATA 12",
                    NombreATA: "SERVICIO – MANTENIMIENTO RUTINARIO"
                },
                {
                    CodigoAta: "ATA 13",
                    NombreATA: "HARDWARE Y HERRAMIENTAS GENERALES"
                },
                {
                    CodigoAta: "ATA 14",
                    NombreATA: "HERRAMIENTAS"
                },
                {
                    CodigoAta: "ATA 15",
                    NombreATA: "ENTRENAMIENTOS EXTERNOS"
                },
                {
                    CodigoAta: "ATA 16",
                    NombreATA: "EQUIPO DE SOPORTE EN TIERRA"
                },
                {
                    CodigoAta: "ATA 17",
                    NombreATA: "EQUIPO AUXILIAR"
                },
                {
                    CodigoAta: "ATA 18",
                    NombreATA: "VIBRACIÓN"
                },
                {
                    CodigoAta: "ATA 19",
                    NombreATA: "COMBUSTIBLE"
                },
                {
                    CodigoAta: "ATA 20",
                    NombreATA: "PRÁCTICAS ESTANDAR"
                },
                {
                    CodigoAta: "ATA 21",
                    NombreATA: "AIRE ACONDICIONADO Y PRESURIZACIÓN"
                },
                {
                    CodigoAta: "ATA 22",
                    NombreATA: "PILOTO AUTOMÁTICO"
                },
                {
                    CodigoAta: "ATA 23",
                    NombreATA: "COMUNICACIONES"
                },
                {
                    CodigoAta: "ATA 24",
                    NombreATA: "SISTEMA ELECTRICO"
                },
                {
                    CodigoAta: "ATA 25",
                    NombreATA: "EQUIPO Y ACCESORIOS"
                },
                {
                    CodigoAta: "ATA 26",
                    NombreATA: "PROTECCIÓN CONTRA EL FUEGO"
                },
                {
                    CodigoAta: "ATA 27",
                    NombreATA: "CONTROLES DE VUELO"
                },
                {
                    CodigoAta: "ATA 28",
                    NombreATA: "COMBUSTIBLE"
                },
                {
                    CodigoAta: "ATA 29",
                    NombreATA: "SISTEMA HIDRÁULICO"
                },
                {
                    CodigoAta: "ATA 30",
                    NombreATA: "PROTECCIÓN CONTRA HIELO Y LLUVIA"
                },
                {
                    CodigoAta: "ATA 31",
                    NombreATA: "SISTEMAS DE INDICACIÓN Y GRABACIÓN"
                },
                {
                    CodigoAta: "ATA 32",
                    NombreATA: "TREN DE ATERRIZAJE"
                },
                {
                    CodigoAta: "ATA 33",
                    NombreATA: "LUCES"
                },
                {
                    CodigoAta: "ATA 34",
                    NombreATA: "NAVEGACIÓN"
                },
                {
                    CodigoAta: "ATA 35",
                    NombreATA: "OXÍGENO"
                },
                {
                    CodigoAta: "ATA 36",
                    NombreATA: "SISTEMA NEUMÁTICO"
                },
                {
                    CodigoAta: "ATA 37",
                    NombreATA: "PRESIÓN Y VACÍO"
                },
                {
                    CodigoAta: "ATA 38",
                    NombreATA: "AGUA / DESECHOS"
                },
                {
                    CodigoAta: "ATA 39",
                    NombreATA: "PANELES ELÉCTRICO-ELECTRÓNICOS Y COMPONENTES MULTIUSO"
                },
                {
                    CodigoAta: "ATA 40",
                    NombreATA: "MULTISISTEMA"
                },
                {
                    CodigoAta: "ATA 41",
                    NombreATA: "AGUA / LASTRE"
                },
                {
                    CodigoAta: "ATA 42",
                    NombreATA: "AVIÓNICA MODULAR INTEGRADA"
                },
                {
                    CodigoAta: "ATA 44",
                    NombreATA: "SISTEMAS DE CABINA"
                },
                {
                    CodigoAta: "ATA 45",
                    NombreATA: "SISTEMA DE DIAGNÓSTICO Y MANTENIMIENTO"
                },
                {
                    CodigoAta: "ATA 46",
                    NombreATA: "SISTEMAS DE INFORMACIÓN"
                },
                {
                    CodigoAta: "ATA 47",
                    NombreATA: "SISTEMA DE GENERACIÓN DE NITRÓGENO"
                },
                {
                    CodigoAta: "ATA 48",
                    NombreATA: "DISPENSACIÓN DE COMBUSTIBLE EN VUELO"
                },
                {
                    CodigoAta: "ATA 49",
                    NombreATA: "UNIDAD DE POTENCIA AUXILIAR"
                },
                {
                    CodigoAta: "ATA 50",
                    NombreATA: "COMPARTIMENTOS DE CARGA Y ACCESORIOS"
                },
                {
                    CodigoAta: "ATA 51",
                    NombreATA: "PRÁCTICAS ESTÁNDAR Y ESTRUCTURAS – GENERAL"
                },
                {
                    CodigoAta: "ATA 52",
                    NombreATA: "PUERTAS"
                },
                {
                    CodigoAta: "ATA 53",
                    NombreATA: "FUSELAJE"
                },
                {
                    CodigoAta: "ATA 54",
                    NombreATA: "GÓNDOLAS / PILONES"
                },
                {
                    CodigoAta: "ATA 55",
                    NombreATA: "ESTABILIZADORES"
                },
                {
                    CodigoAta: "ATA 56",
                    NombreATA: "VENTANAS"
                },
                {
                    CodigoAta: "ATA 57",
                    NombreATA: "ALAS"
                },
                {
                    CodigoAta: "ATA 60",
                    NombreATA: "ESTÁNDARES PRÁCTICOS – HÉLICE/ROTOR"
                },
                {
                    CodigoAta: "ATA 61",
                    NombreATA: "HELICES Y PROPULSORES"
                },
                {
                    CodigoAta: "ATA 62",
                    NombreATA: "ROTOR(ES) PRINCIPAL(ES)"
                },
                {
                    CodigoAta: "ATA 63",
                    NombreATA: "IMPULSOR DEL ROTOR"
                },
                {
                    CodigoAta: "ATA 64",
                    NombreATA: "ROTOR DE COLA"
                },
                {
                    CodigoAta: "ATA 65",
                    NombreATA: "EMPUJE DEL ROTOR DE COLA"
                },
                {
                    CodigoAta: "ATA 66",
                    NombreATA: "PALAS PLEGABLES/PILONES"
                },
                {
                    CodigoAta: "ATA 67",
                    NombreATA: "CONTROL EN VUELO DE LOS ROTORES"
                },
                {
                    CodigoAta: "ATA 70",
                    NombreATA: "ESTÁNDARES PRÁCTICOS DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 71",
                    NombreATA: "PLANTA MOTRIZ"
                },
                {
                    CodigoAta: "PTOS",
                    NombreATA: ""
                },
                {
                    CodigoAta: "ATA 72",
                    NombreATA: "MOTORES DE TURBINAS/TURBOPROPULSORES"
                },
                {
                    CodigoAta: "ATA 73",
                    NombreATA: "CONTROL Y GESTIÓN DEL COMBUSTIBLE DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 74",
                    NombreATA: "IGNICIÓN DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 75",
                    NombreATA: "PURGA DEL AIRE"
                },
                {
                    CodigoAta: "ATA 76",
                    NombreATA: "CONTROLES DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 77",
                    NombreATA: "INDICADORES DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 78",
                    NombreATA: "SISTEMA DE ESCAPE DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 79",
                    NombreATA: "ACEITE DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 80",
                    NombreATA: "ARRANQUE DEL MOTOR"
                },
                {
                    CodigoAta: "ATA 81",
                    NombreATA: "SISTEMA DE TURBINA (MOTOR RECIPROCO)"
                },
                {
                    CodigoAta: "ATA 82",
                    NombreATA: "INYECCIÓN DE AGUA"
                },
                {
                    CodigoAta: "ATA 83",
                    NombreATA: "CAJA DE ENGRANAJES"
                },
                {
                    CodigoAta: "ATA 84",
                    NombreATA: "INCREMENTO DE LA PROPULSIÓN"
                },
                {
                    CodigoAta: "ATA 85",
                    NombreATA: "SISTEMAS DE CELDAS DE COMBUSTIBLE"
                },
                {
                    CodigoAta: "ATA 91",
                    NombreATA: "GRÁFICAS"
                },
                {
                    CodigoAta: "ATA 92",
                    NombreATA: "INSTALACIÓN DEL SISTEMA ELÉCTRICO"
                }
            ]
        });

        if(!createAtas){
            throw new BadRequestException('Se produjo un error.');
        }

        baseResponse.message = 'Se han creado los datos.';

        return baseResponse;
    }

    async generateRoles(): Promise<DtoBaseResponse> {
        const createRoles = await this.prismaService.roles.createMany({
            data: [
                {
                    rol: 'Almacenista'
                },
                {
                    rol: 'Inspector'
                },
                {
                    rol: 'Técnico'
                },
                {
                    rol: 'Jefe de almacén'
                }
            ]
        });

        if(!createRoles){
            throw new BadRequestException('Se produjo un error.');
        }

        baseResponse.message = 'Se han creado los roles.';

        return baseResponse;
    }
    async generateUsers(): Promise<DtoBaseResponse> {
        const createRoles = await this.prismaService.user.createMany({
            data: [
                {
                    nameUser: 'Eduardo',
                    lastnameUser: 'Uribe',
                    rolId: 1,
                    password: '12345'
                },
                {
                    nameUser: 'Luis',
                    lastnameUser: 'Nava',
                    rolId: 2,
                    password: '12345'
                },
                {
                    nameUser: 'Saulo',
                    lastnameUser: 'Ortega',
                    rolId: 3,
                    password: '12345'
                },
                {
                    nameUser: 'José',
                    lastnameUser: 'Urdaneta',
                    rolId: 4,
                    password: 'admin123'
                },
            ]
        });

        if(!createRoles){
            throw new BadRequestException('Se produjo un error.');
        }

        baseResponse.message = 'Se han creado los usuarios.';

        return baseResponse;
    }
    async generateTypesComponents(): Promise<DtoBaseResponse> {
        const createRoles = await this.prismaService.typeComponents.createMany({
            data: [
                {
                    typeComponent: 'Consumibles'
                },
                {
                    typeComponent: 'Consumibles Serializado'
                },
                {
                    typeComponent: 'Equipo'
                },
                {
                    typeComponent: 'Herramienta'
                },
                {
                    typeComponent: 'Motor'
                },
                {
                    typeComponent: 'Propela'
                },
                {
                    typeComponent: 'Rotable'
                },
            ]
        });

        if(!createRoles){
            throw new BadRequestException('Se produjo un error.');
        }

        baseResponse.message = 'Se han creado los tipos.';

        return baseResponse;
    }
}
