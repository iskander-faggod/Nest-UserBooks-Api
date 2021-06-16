import { Controller, Delete, Get, Post } from '@nestjs/common';
//addBook (Create/Update)
//addBookToUser (Post)
//returnBook
//deleteBook (delete)
//getOne
//getMany

@Controller('books')
export class BookController {

  @Get()
  getAllBooks(): string {
    return "Get All Books";
  }

  @Get(':id')
  getOneBooks(): string {
    return "Get One Book";
  }

  @Post()
  saveBook() {

  }

  @Delete(':id')
  deleteBook() {
    return "Delete A Book"
  }

}
