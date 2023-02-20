import { Controller,Body, Post, Get,Param, Put, Delete } from "@nestjs/common";
import { User } from "src/entity/user.entity";
import { UsersService } from "./users.service";


@Controller('page')
export class UsersController{
    constructor(private userService: UsersService){}
    
    @Post('create')
    async create(@Body() body){
        console.log(body)
        return await this.userService.create(body);
    }

    @Get()
    read(): Promise<User[]> {
      return this.userService.reading();
    }

    @Put(":id/update")
    update(@Body() body, @Param('id') id): Promise<any>{
        return this.userService.update(body, id)
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.userService.delete(id);
    }  
}