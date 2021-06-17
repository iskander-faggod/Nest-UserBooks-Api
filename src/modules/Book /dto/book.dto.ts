import { ApiProperty } from '@nestjs/swagger';
export class CreateBookDto {
  authorName : string;
  booksName : string;
  isActive? : boolean;
}

export class EditBookDto {
  authorName : string;
  booksName : string;
  isActive? : boolean;
}

export class ReturnBookDto {
  isActive : boolean;
}

