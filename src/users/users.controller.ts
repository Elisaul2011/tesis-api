import { Constructor } from './../../node_modules/make-error/index.d';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { user } from '@prisma/client';
import { UsersService } from './users.service';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { DtoCreateUser } from 'src/dtos/user.dto';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Get()
    async getUsers(): Promise<user[]> {
        return await this.userService.getUsers();
    }

    @Post()
    async postUser(@Body() newUser: DtoCreateUser): Promise<DtoBaseResponse>{
        return await this.userService.postUser(newUser);
    }
}
