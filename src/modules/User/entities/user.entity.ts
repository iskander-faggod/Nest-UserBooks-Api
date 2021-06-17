import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Book } from '../../Book /entities/book.entity';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @PrimaryGeneratedColumn()
  id: string;

  @ApiProperty({ example: "iskander-faggod", description: "Логин" })
  @Column()
  login: string;

  @ApiProperty({ example: "qwerty", description: "Пароль" })
  @Column()
  password: string;

  @ApiProperty({ example: "True", description: "Есть ли абонемент"})
  @Column({ default: false })
  withCard: boolean;

  @ApiProperty({ example: "Три товарища, Милые кости", description: "Список книг" })
  @OneToMany(type => Book, book => book.id)
  books: Book[];
}