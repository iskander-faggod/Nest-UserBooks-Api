import { ApiProperty } from '@nestjs/swagger';
export class CreateBookDto {
  @ApiProperty({ example: "Мария Ремарк", description: "Имя автора" })
  authorName : string;
  @ApiProperty({ example: "Три товарища", description: "Название книги" })
  booksName : string;
  @ApiProperty({ example: "true", description: "В пользовании у кого-то" })
  isActive? : boolean;
}

export class EditBookDto {
  @ApiProperty({ example: "Мария Ремарк", description: "Имя автора" })
  authorName : string;
  @ApiProperty({ example: "Три товарища", description: "Название книги" })
  booksName : string;
  @ApiProperty({ example: "true", description: "В пользовании у кого-то" })
  isActive? : boolean;
}

export class ReturnBookDto {
  @ApiProperty({ example: "true", description: "В пользовании у кого-то" })
  isActive : boolean;}

