import { Book } from '../../Book /entities/book.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto{
  login : string;
  password : string;
  withCard: boolean
  books : Array<Book>
}

export class EditUserDto{
  login : string;
  password : string;
  withCard: boolean
  books : Array<Book>
}

export class AddBookDto {
  books : Array<Book>;
}