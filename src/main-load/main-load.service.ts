import { BadRequestException, Injectable } from '@nestjs/common';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataAta } from './main-load.data';

@Injectable()
export class MainLoadService {
  constructor(private prismaService: PrismaService) {}

  async generateAllData(): Promise<DtoBaseResponse> {
    const createAtas = await this.prismaService.atas.createMany({
      data: dataAta,
    });
    const createRoles = await this.prismaService.roles.createMany({
      data: [
        {
          rol: 'Almacenista',
        },
        {
          rol: 'Inspector',
        },
        {
          rol: 'Técnico',
        },
        {
          rol: 'Jefe de almacén',
        },
      ],
    });

    const createUsers = await this.prismaService.user.createMany({
      data: [
        {
          nameUser: 'Eduardo',
          lastnameUser: 'Uribe',
          rolId: 1,
          password: '12345',
          active: true
        },
        {
          nameUser: 'Luis',
          lastnameUser: 'Nava',
          rolId: 2,
          password: '12345',
          active: true
        },
        {
          nameUser: 'Saulo',
          lastnameUser: 'Ortega',
          rolId: 3,
          password: '12345',
          active: true
        },
        {
          nameUser: 'José',
          lastnameUser: 'Urdaneta',
          rolId: 4,
          password: 'admin123',
          active: true
        },
      ],
    });

    const createtipoComponente = await this.prismaService.tipoComponente.createMany({
        data: [
          {
            tipoComponente: 'Consumibles',
          },
          {
            tipoComponente: 'Consumibles Serializado',
          },
          {
            tipoComponente: 'Equipo',
          },
          {
            tipoComponente: 'Herramienta',
          },
          {
            tipoComponente: 'Motor',
          },
          {
            tipoComponente: 'Propela',
          },
          {
            tipoComponente: 'Rotable',
          },
        ],
    });

    const createtipoMovimiento = await this.prismaService.tipoMovimiento.createMany({
        data: [
          {
            tipoMovimiento: 'Inspeccionar',
          },
          {
            tipoMovimiento: 'Prestar',
          },
          {
            tipoMovimiento: 'WO',
          },
          {
            tipoMovimiento: 'OT',
          },
          {
            tipoMovimiento: 'Cuarentena',
          },
        ],
    });

    const createEstado = await this.prismaService.estado.createMany({
      data: [
        {
          estado: 'Serviciable',
        },
        {
          estado: 'Esperando por inspección',
        },
        {
          estado: 'En préstamo',
        },
        {
          estado: 'En cuarentena',
        },
      ],
    });

    const createAlmacen = await this.prismaService.almacenes.createMany({
      data: [
        {
          ciudad:'Maracaibo',
          descripcion:'Descripción del Almacen uno',
          estado:1,
          nombre:'Almacen Nro1',
          pais:'Venezuela',
        },
        {
          ciudad:'Merida',
          descripcion:'Descripción del Almacen dos',
          estado:1,
          nombre:'Almacen Nro2',
          pais:'Venezuela',
        }
      ]
    })

    const createZonas = await this.prismaService.zona.createMany({
      data: [
        {
          descripcionZona: 'Piezas pequeñas',
          zona:'Zona 1',
          almacenId: 1
        },
        {
          descripcionZona: 'Piezas grandes',
          zona:'Zona 2',
          almacenId: 1
        },
        {
          descripcionZona: 'Piezas mediadas',
          zona:'Zona 3',
          almacenId: 2
        }
      ]
    });

    //--------------------------------------------//
    const createHorasManuales = await this.prismaService.horasManuales.createMany({
      data: [
        {
        idHorasManuales: 1,
        fecha: new Date('2024-04-15'),
        horas: 12,
        ciclos: 2,
        aterrizajes: 4
        }
      ]
    })

    const createNecesidades = await this.prismaService.necesidadesTecnicas.createMany({
      data: [
        {
          idNecesidadesTecnicas: 1,
          pn: '2121451',
          descripcion: 'Guantes',
          cantidad: 1
        }
      ]
    })

    const createInventario = await this.prismaService.inventario.createMany({
      data: [
        {
          almacenesId: 1,
          pn: 'ABC-123',
          lote: '',
          descripcion: 'Sensor de presión',
          tipoComponenteId: 5,
          sn: 'SN-001',
          cantidad: 15,
          estadoId: 2,
          fabricante: '',
          shelfLife: new Date('2025-03-15'),
          order: 'WO-001',
          zonaId: 1,
          ataId: 1,
          horasManualesId: 1,
          necesidadesTecnicasId: 1,
          rolId: 1
        },
        {
          almacenesId: 1,
          pn: 'XYZ-456',
          lote: '',
          descripcion: 'Válvula de combustible',
          tipoComponenteId: 3,
          sn: 'SN-002',
          cantidad: 8,
          estadoId: 1,
          shelfLife: new Date('2024-11-30'),
          order: 'OT-002',
          zonaId: 1,
          fabricante: '',
          ataId: 1,
          horasManualesId: 1,
          necesidadesTecnicasId: 1,
          rolId: 1
        },
        {
          almacenesId: 1,
          pn: 'DEF-789',
          lote: '',
          descripcion: 'Filtro de aceite',
          tipoComponenteId: 2,
          sn: 'SN-003',
          cantidad: 20,
          estadoId: 3,
          shelfLife: new Date('2026-01-01'),
          order: 'INSP-003',
          zonaId: 1,
          fabricante: '',
          ataId: 1,
          horasManualesId: 1,
          necesidadesTecnicasId: 1,
          rolId: 1
        },
        {
          almacenesId: 1,
          pn: 'GHI-012',
          lote: '',
          descripcion: 'Regulador de presión',
          tipoComponenteId: 6,
          sn: 'SN-004',
          cantidad: 12,
          estadoId: 1,
          shelfLife: new Date('2025-06-30'),
          order: 'WO-004',
          zonaId: 1,
          fabricante: '',
          ataId: 1,
          horasManualesId: 1,
          necesidadesTecnicasId: 1,
          rolId: 1
        },
        {
          almacenesId: 1,
          pn: 'JKL-345',
          lote: '',
          descripcion: 'Bomba de combustible',
          tipoComponenteId: 1,
          sn: 'SN-005',
          cantidad: 6,
          estadoId: 2,
          shelfLife: new Date('2024-09-15'),
          order: 'OT-005',
          zonaId: 1,
          fabricante: '',
          ataId: 1,
          horasManualesId: 1,
          necesidadesTecnicasId: 1,
          rolId: 1
        },
        {
          almacenesId: 1,
          pn: 'MNO-678',
          lote: '',
          descripcion: 'Interruptor de encendido',
          tipoComponenteId: 4,
          sn: 'SN-006',
          cantidad: 18,
          estadoId: 3,
          shelfLife: new Date('2026-04-20'),
          order: 'INSP-006',
          zonaId: 1,
          fabricante: '',
          ataId: 1,
          horasManualesId: 1,
          necesidadesTecnicasId: 1,
          rolId: 1
        },
        {
          almacenesId: 1,
          pn: 'PQR-901',
          lote: '',
          descripcion: 'Alternador',
          tipoComponenteId: 7,
          sn: 'SN-007',
          cantidad: 9,
          estadoId: 1,
          shelfLife: new Date('2025-12-31'),
          order: 'WO-007',
          zonaId: 1,
          fabricante: '',
          ataId: 1,
          horasManualesId: 1,
          necesidadesTecnicasId: 1,
          rolId: 1
        },
        {
          almacenesId: 1,
          pn: 'STU-234',
          lote: '',
          descripcion: 'Neumático',
          tipoComponenteId: 2,
          sn: 'SN-008',
          cantidad: 22,
          estadoId: 2,
          shelfLife: new Date('2024-07-01'),
          order: 'OT-008',
          zonaId: 1,
          fabricante: '',
          ataId: 1,
          horasManualesId: 1,
          necesidadesTecnicasId: 1,
          rolId: 1
        },
        {
          almacenesId: 1,
          pn: 'VWX-567',
          lote: '',
          descripcion: 'Amortiguador',
          tipoComponenteId: 5,
          sn: 'SN-009',
          cantidad: 14,
          estadoId: 3,
          shelfLife: new Date('2026-02-28'),
          order: 'INSP-009',
          zonaId: 1,
          fabricante: '',
          ataId: 1,
          horasManualesId: 1,
          necesidadesTecnicasId: 1,
          rolId: 1
        },
        {
          almacenesId: 1,
          pn: 'YZA-890',
          lote: '',
          descripcion: 'Batería',
          tipoComponenteId: 3,
          sn: 'SN-010',
          cantidad: 11,
          estadoId: 1,
          shelfLife: new Date('2025-05-31'),
          order: 'WO-010',
          zonaId: 1,
          fabricante: '',
          ataId: 1,
          horasManualesId: 1,
          necesidadesTecnicasId: 1,
          rolId: 1
        },
      ],
    });

    const createAeronave = await this.prismaService.aeronave.createMany({
      data: [
        {
          aeronave: 'Cessna 172',
          inventarioId: 1,
        },
        {
          aeronave: 'Boeing 737',
          inventarioId: 2,
        },
        {
          aeronave: 'Airbus A320',
          inventarioId: 3,
        },
        {
          aeronave: 'Embraer ERJ-145',
          inventarioId: 4,
        },
        {
          aeronave: 'Bombardier CRJ-200',
          inventarioId: 5,
        },
      ],
    });

    const createTallerReparacion = await this.prismaService.tallerReparacion.createMany({
        data: [
          {
            taller: 'Taller A',
            inventarioId: 1,
          },
          {
            taller: 'Taller B',
            inventarioId: 2,
          },
          {
            taller: 'Taller C',
            inventarioId: 3,
          },
          {
            taller: 'Taller D',
            inventarioId: 4,
          },
          {
            taller: 'Taller E',
            inventarioId: 5,
          },
        ],
    });

    if (!createNecesidades) {
      throw new BadRequestException('Se produjo un error.');
    }
    if (!createHorasManuales) {
      throw new BadRequestException('Se produjo un error.');
    }
    if (!createEstado) {
      throw new BadRequestException('Se produjo un error.');
    }
    if (!createRoles) {
      throw new BadRequestException('Se produjo un error.');
    }
    if (!createUsers) {
      throw new BadRequestException('Se produjo un error.');
    }
    if (!createtipoComponente) {
      throw new BadRequestException('Se produjo un error.');
    }
    if (!createAtas) {
      throw new BadRequestException('Se produjo un error.');
    }
    if (!createtipoMovimiento) {
      throw new BadRequestException('Se produjo un error.');
    }

    if (!createAlmacen) {
      throw new BadRequestException('Se produjo un error.');
    }

    if (!createZonas) {
      throw new BadRequestException('Se produjo un error.');
    }
    if (!createInventario) {
      throw new BadRequestException('Se produjo un error.');
    }

    if (!createAeronave) {
      throw new BadRequestException('Se produjo un error.');
    }

    if (!createTallerReparacion) {
      throw new BadRequestException('Se produjo un error.');
    }

    // if (!createEstado) {
    //   throw new BadRequestException('Se produjo un error.');
    // }

    baseResponse.message = 'Se han creado los datos.';

    return baseResponse;
  }
}
