import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BookController } from './controllers/book.controller';
import { BooksService } from './services/book.service';
import { UsersService } from '../User/services/user.service';


@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BooksService, UsersService],
  exports: [TypeOrmModule, BookModule],
})
export class BookModule {
}
