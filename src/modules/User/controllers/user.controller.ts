import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { AddBookDto, CreateUserDto, EditUserDto } from '../dto/user.dto';
import { BooksService } from '../../Book /services/book.service';
import { UsersService } from '../services/user.service';
import { Book } from '../../Book /entities/book.entity';
import { CreateBookDto, EditBookDto } from '../../Book /dto/book.dto';
//addUser +
//editUser +
//removeUser +
//allUsers +
//currentUser +
//addBookToUser (Post) +
@Controller('api/users')
export class BookController {
  constructor(private readonly userService: UsersService, private readonly bookService: BooksService) {
  }

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  getOneUser(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }


  @Post()
  createUser(@Body() createUserDto: CreateUserDto, createBookDto: CreateBookDto): Promise<User> {
    return this.userService.create(createUserDto, createBookDto);
  }

  @Put(':id')
  async editBook(@Body() editUserDto: EditUserDto, @Param('id') id: string): Promise<User | { error }> {
    const user = await this.userService.findOne(id);
    if (user == undefined) {
      return {
        error: 'User not found',
      };
    }

    user.withCard = editUserDto.withCard;
    user.books = editUserDto.books;
    user.login = editUserDto.login;
    user.password = editUserDto.password;
    return this.userService.edit(user);
  }

  @Patch('card')
  buyCard(@Body() user: User): User {
    user.withCard = true;
    return user;
  }


  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.remove(id);
  }

  @Put('id:author:title')
  async addBookToUser(@Param('id') id: string, @Param('author') author: string, @Param('title') title: string, addBookDto: AddBookDto): Promise<User> {
    const user = await this.userService.findOne(id);
    const book = await this.bookService.getBookByValue(author, title);
    if (user && book) {
      return await this.userService.addBook(book, addBookDto);
    }
  }

}
