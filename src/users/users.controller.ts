import { Constructor } from './../../node_modules/make-error/index.d';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { roles, user } from '@prisma/client';
import { UsersService } from './users.service';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { DtoCreateUser, DtoEditUser } from 'src/dtos/user.dto';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Get()
    async getUsers(): Promise<user[]> {
        return await this.userService.getUsers();
    }

    @Get('/roles')
    async getUsersRoles(): Promise<roles[]> {
        return await this.userService.getUsersRoles();
    }

    @Post()
    async postUser(@Body() newUser: DtoCreateUser): Promise<DtoBaseResponse>{
        return await this.userService.postUser(newUser);
    }

    @Put()
    async putUser(@Body() user: DtoEditUser): Promise<DtoBaseResponse>{
        return await this.userService.putUser(user);
    }
}