import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from '../entities/book.entity';
import { CreateBookDto, EditBookDto, ReturnBookDto } from '../dto/book.dto';
import { BooksService } from '../services/book.service';
//addBook (Create/Update) DONE
//returnBook DONE
//deleteBook (delete) DONE
//getOne DONE
//getMany DONE

@Controller('api/books')
export class BookController {

  constructor(private readonly bookService: BooksService) {
  }

  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  getOneBook(@Param('id') bookId: string): Promise<Book> {
    return this.bookService.findOne(bookId);
  }


  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    const book = new Book();
    book.authorName = createBookDto.authorName;
    book.booksName = createBookDto.booksName;
    if (createBookDto.isActive != undefined) {
      book.isActive = createBookDto.isActive;
    }
    return this.bookService.create(book);
  }

  @Put(':id')
  async editBook(@Body() editBookDto: EditBookDto, @Param('id') id: string): Promise<Book | { error }> {
    const book = await this.bookService.findOne(id);
    if (book == undefined) {
      return {
        error: 'Book not found',
      };
    }
    book.authorName = editBookDto.authorName;
    book.booksName = editBookDto.booksName;
    book.isActive = editBookDto.isActive;
    return this.bookService.edit(book);
  }

  @Put('return/:id')
  async returnBook(@Body() returnBookDto: ReturnBookDto, @Param('id') id: string): Promise<Book>{
    const book = await this.bookService.findOne(id);
    return this.bookService.return(book)
  }

  @Delete(':id')
  deleteBook(@Param('id') bookId: string): Promise<void> {
    return this.bookService.remove(bookId);
  }

  @Get(':author:title')
  getByValue(@Param("author") author: string, @Param("title") title: string) {
    return this.bookService.getBookByValue(author, title);
  }

}
