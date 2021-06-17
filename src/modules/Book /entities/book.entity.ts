import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class Book {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @PrimaryGeneratedColumn()
  id: string;

  @ApiProperty({ example: "Мария Ремарк", description: "Имя автора произведения" })
  @Column()
  authorName: string;

  @ApiProperty({ example: "Три товарища", description: "Название книги" })
  @Column()
  booksName: string;

  @ApiProperty({ example: "false", description: "В пользовании у кого-нибудь или нет" })
  @Column({ default: false })
  isActive: boolean;

}