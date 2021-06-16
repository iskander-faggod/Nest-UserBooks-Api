import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  authorName: string;

  @Column()
  booksName: string;

  @Column({ default: false })
  isActive: boolean;

}