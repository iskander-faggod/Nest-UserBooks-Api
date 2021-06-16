import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto, EditUserDto } from '../dto/user.dto';

@Controller('api/users')
export class BookController {

  @Get()
  getAllUsers() {
    return 'Get All Users';
  }

  @Get(':id')
  getOneUser(@Param('id') userId: number) {
    return userId;
  }


  @Post()
  createUser(@Body() user: CreateUserDto): CreateUserDto {
    return user;
  }

  @Put(':id')
  editUser(@Param('id') id: number, @Body() user: EditUserDto): EditUserDto {
    return user
  }

  @Patch('card')
  buyCard(@Body() user: User): User {
    user.withCard = true;
    return user;
  }


  @Delete(':id')
  deleteUser(@Param('id') userId: number) {
    return userId;
  }

}
