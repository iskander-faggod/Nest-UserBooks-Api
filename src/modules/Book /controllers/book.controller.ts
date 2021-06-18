import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { Book } from '../entities/book.entity';
import { CreateBookDto, EditBookDto, ReturnBookDto } from '../dto/book.dto';
import { BooksService } from '../services/book.service';
import { ApiOperation } from '@nestjs/swagger';
//addBook (Create/Update) DONE
//returnBook DONE
//deleteBook (delete) DONE
//getOne DONE
//getMany DONE

@Controller('api/books')
export class BookController {

  constructor(private readonly bookService: BooksService) {
  }

  @ApiOperation({ summary: 'Получение списка всех книг' })
  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.bookService.findAllBooks();
  }

  @ApiOperation({ summary: 'Получение книги по id' })
  @Get(':id')
  getOneBook(@Param('id') bookId: string): Promise<Book> {
    return this.bookService.findOneBook(bookId);
  }

  @ApiOperation({ summary: 'Создание новой книги' })
  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    const book = new Book();
    book.authorName = createBookDto.authorName;
    book.booksName = createBookDto.booksName;
    if (createBookDto.isActive != undefined) {
      book.isActive = createBookDto.isActive;
    }
    return this.bookService.createBook(book);
  }

  @ApiOperation({ summary: 'Редактировать книгу' })
  @Put(':id')
  async editBook(@Body() editBookDto: EditBookDto, @Param('id') id: string): Promise<Book | { error }> {
    const book = await this.bookService.findOneBook(id);
    if (book == undefined) {
      throw  new HttpException('Cannot edit book', 404);
    }
    book.authorName = editBookDto.authorName;
    book.booksName = editBookDto.booksName;
    book.isActive = editBookDto.isActive;
    return this.bookService.editBook(book);
  }

  @ApiOperation({ summary: 'Возврат книги пользователю' })
  @Put('return/:id')
  async returnBook(@Body() returnBookDto: ReturnBookDto, @Param('id') id: string): Promise<Book> {
    const book = await this.bookService.findOneBook(id);
    if (book == undefined) {
      throw  new HttpException('Cannot return book', 404);
    }
    book.isActive = false;
    return this.bookService.returnBook(book);
  }

  @ApiOperation({ summary: 'Удаление книги' })
  @Delete(':id')
  deleteBook(@Param('id') bookId: string): Promise<void> {
    return this.bookService.removeBook(bookId);
  }

  @ApiOperation({ summary: 'Получение книги по автору и названию' })
  @Get(':author:title')
  getByValue(@Param('author') author: string, @Param('title') title: string) {
    return this.bookService.getBookByValue(author, title);
  }

}
