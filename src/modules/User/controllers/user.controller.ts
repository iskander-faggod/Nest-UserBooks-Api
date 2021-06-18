import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, Put } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { AddBookDto, CreateUserDto, EditUserDto } from '../dto/user.dto';
import { BooksService } from '../../Book /services/book.service';
import { UsersService } from '../services/user.service';
import { Book } from '../../Book /entities/book.entity';
import { CreateBookDto, EditBookDto } from '../../Book /dto/book.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
//  Needed methods :
//addUser +
//editUser +
//removeUser +
//allUsers +
//currentUser +
//addBookToUser (Post) +
@ApiTags('Пользователи')
@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UsersService, private readonly bookService: BooksService) {
  }

  @ApiOperation({ summary: "Получение всех пользователей" })
  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @ApiOperation({ summary: "Получение пользователя по id" })
  @Get(':id')
  getOneUser(@Param('id') id: number): Promise<User> {
    return this.userService.findOneUser(id);
  }


  @ApiOperation({ summary: "Создание пользователя" })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto, createBookDto: CreateBookDto): Promise<User> {
    return this.userService.createUser(createUserDto, createBookDto);
  }

  @ApiOperation({ summary: "Редактирование пользователя" })
  @Put(':id')
  async editBook(@Body() editUserDto: EditUserDto, @Param('id') id: number): Promise<User | { error }> {
    const user = await this.userService.findOneUser(id);
    if (user == undefined) {
      throw  new HttpException('Can not edit user', 404)
    }

    user.withCard = editUserDto.withCard;
    user.books = editUserDto.books;
    user.login = editUserDto.login;
    user.password = editUserDto.password;
    return this.userService.editUser(user);
  }

  @ApiOperation({ summary: "Покупка абонемента" })
  @Patch('card')
  buyCard(@Body() user: User): User {
    user.withCard = true;
    return user;
  }

  @ApiOperation({ summary: "Удаление пользователя" })
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return await this.userService.removeUser(id);
  }

  @ApiOperation({ summary: "Добавления книги к пользователю" })
  @Put('id:author:title')
  async addBookToUser(@Param('id') id: number, @Param('author') author: string, @Param('title') title: string, addBookDto: AddBookDto): Promise<User> {
    const user = await this.userService.findOneUser(id);
    const book = await this.bookService.getBookByValue(author, title);
    if (user && book && user.withCard) {
      return await this.userService.addBook(book, addBookDto);
    } else {
      throw  new HttpException('Cannot add book to user', 404)
    }
  }

}
