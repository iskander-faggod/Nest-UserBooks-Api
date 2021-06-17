import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../Book /entities/book.entity';
import { User } from './entities/user.entity';
import { BookController } from './controllers/user.controller';
import { BooksService } from '../Book /services/book.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Book]), BooksService],
  controllers: [],
  providers: [],
  exports : [TypeOrmModule]
})
export class UserModule {}
