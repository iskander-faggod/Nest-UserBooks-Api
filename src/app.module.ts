import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './modules/Book /book.module';
import { Book } from './modules/Book /entities/book.entity';
import { UserModule } from './modules/User/user.module';
import { User } from './modules/User/entities/user.entity';
import { BookController } from './modules/Book /controllers/book.controller';
import { BooksService } from './modules/Book /services/book.service';


@Module({
  imports: [TypeOrmModule.forRoot(),
    BookModule,
    UserModule],
  controllers: [AppController, BookController],
  providers: [AppService, BooksService],
})
export class AppModule {
}


