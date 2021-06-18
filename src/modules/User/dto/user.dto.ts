import { Book } from '../../Book /entities/book.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto{
  @ApiProperty({ example: "iskander-faggod", description: "Логин" })
  login : string;
  @ApiProperty({ example: "qwerty", description: "Пароль" })
  password : string;
  @ApiProperty({ example: "true", description: "Есть ли абонемент" })
  withCard: boolean
  @ApiProperty({ example: "[Три товарища, Милые кости]", description: "Массив книг" })
  books : Array<Book>
}

export class EditUserDto{
  @ApiProperty({ example: "iskander-faggod", description: "Логин" })
  login : string;
  @ApiProperty({ example: "qwerty", description: "Пароль" })
  password : string;
  @ApiProperty({ example: "true", description: "Есть ли абонемент" })
  withCard: boolean
  @ApiProperty({ example: "[Три товарища, Милые кости]", description: "Массив книг" })
  books : Array<Book>
}

export class AddBookDto {
  @ApiProperty({ example: "[Три товарища, Милые кости]", description: "Массив книг" })
  books : Array<Book>;
}