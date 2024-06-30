import { Controller, Get } from '@nestjs/common';
import { MainLoadService } from './main-load.service';
import { DtoBaseResponse } from 'src/dtos/base-response';

@Controller('main-load')
export class MainLoadController {

    constructor(private mainLoadService: MainLoadService){}

    @Get()
    async loadAllData(): Promise<DtoBaseResponse> {
        return await this.mainLoadService.generateAllData();
    }
    // async loadAta(): Promise<DtoBaseResponse> {
    //     return await this.mainLoadService.generateAtas();
    // }
    // @Get('roles')
    // async loadRoles(): Promise<DtoBaseResponse> {
    //     return await this.mainLoadService.generateRoles();
    // }
    // @Get('usuarios')
    // async loadUsers(): Promise<DtoBaseResponse> {
    //     return await this.mainLoadService.generateUsers();
    // }
    // @Get('tipos')
    // async loadTypes(): Promise<DtoBaseResponse> {
    //     return await this.mainLoadService.generateTypesComponents();
    // }
}
