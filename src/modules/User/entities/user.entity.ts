import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Book } from '../../Book /entities/book.entity';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  id: string;

  @ApiProperty({ example: "iskander-faggod", description: "Логин" })
  @Column()
  login: string;

  @ApiProperty({ example: "qwerty", description: "Пароль" })
  @Column()
  password: string;

  @Column({ default: false })
  withCard: boolean;

  @OneToMany(type => Book, book => book.id)
  books: Book[];
}