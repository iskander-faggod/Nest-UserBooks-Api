import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from '../entities/book.entity';
import { CreateBookDto, EditBookDto } from '../dto/book.dto';
//addBook (Create/Update)
//addBookToUser (Post)
//returnBook
//deleteBook (delete)
//getOne
//getMany

@Controller('api/books')
export class BookController {

  @Get()
  getAllBooks(): string {
    return 'Get All Books';
  }

  @Get(':id')
  getOneBook(@Param('id') bookId: number) {
    return bookId;
  }


  @Post()
  createBook(@Body() book: CreateBookDto): CreateBookDto {
    console.log(book);
    return book;

  }

  @Put()
  editBook(@Body() book: EditBookDto): EditBookDto {
    return book;
  }

  @Delete(':id')
  deleteBook(@Param('id') bookId: number) {
    return bookId;
  }

}
