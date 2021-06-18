import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';


@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {
  }

  async findAllBooks(): Promise<Book[]> {
    return await this.booksRepository.find();
  }

  async findOneBook(id: number): Promise<Book> {
    return await this.booksRepository.findOne(id);
  }


  async removeBook(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }

  async createBook(book: Book): Promise<Book> {
    delete book.id;
    return await this.booksRepository.save(book);
  }

  async editBook(book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }

  async returnBook(book: Book): Promise<Book> {
    book.isActive = false
    return this.booksRepository.save(book);
  }

  async getBookByValue(author: string, title: string ) {
    return await this.booksRepository.findOne({ where: { author, title } })
  }




}