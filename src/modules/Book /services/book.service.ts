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

  async findAll(): Promise<Book[]> {
    return await this.booksRepository.find();
  }

  async findOne(id: string): Promise<Book> {
    return await this.booksRepository.findOne(id);
  }


  async remove(id: string): Promise<void> {
    await this.booksRepository.delete(id);
  }

  async create(book: Book): Promise<Book> {
    delete book.id;
    return await this.booksRepository.save(book);
  }

  async edit(book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }

  async return(book: Book): Promise<Book> {
    book.isActive = false
    return this.booksRepository.save(book);
  }

  async getBookByValue(author: string, title: string ) {
    return await this.booksRepository.findOne({ where: { author, title } })
  }




}