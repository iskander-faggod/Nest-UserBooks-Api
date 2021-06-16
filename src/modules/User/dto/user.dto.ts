import { Book } from '../../Book /entities/book.entity';

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