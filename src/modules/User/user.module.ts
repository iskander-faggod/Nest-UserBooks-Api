import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../Book /entities/book.entity';
import { User } from './entities/user.entity';
import { UsersController } from './controllers/user.controller';
import { BooksService } from '../Book /services/book.service';
import { UsersService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Book]), BooksService],
  controllers: [UsersController],
  providers: [UsersService],
  exports : [TypeOrmModule]
})
export class UserModule {}
