import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Book } from '../../Book /entities/book.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column({ default: false })
  withCard: boolean;

  @OneToMany(type => Book, book => book.id)
  books: Book[];
}