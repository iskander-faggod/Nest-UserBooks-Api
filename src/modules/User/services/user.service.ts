import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Book } from '../../Book /entities/book.entity';
import { AddBookDto, CreateUserDto } from '../dto/user.dto';
import { BooksService } from '../../Book /services/book.service';
import { CreateBookDto } from '../../Book /dto/book.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private bookService: BooksService,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async create(createUserDto: CreateUserDto, createBookDto : CreateBookDto): Promise<User> {
    const newUser = await this.usersRepository.create(createUserDto);
    const book = await this.bookService.getBookByValue(createBookDto.authorName, createBookDto.booksName);
    newUser.books=[book]
    return newUser
  }

  async edit(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async addBook(book : Book, addBookDto: AddBookDto): Promise<User>{
    if (addBookDto.books.length < 5){
      addBookDto.books.push(book)
    }
    return this.usersRepository.save(addBookDto)

  }
}