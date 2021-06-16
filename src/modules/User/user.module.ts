import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../Book /entities/book.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), Book],
  controllers: [],
  providers: [],
  exports : [TypeOrmModule]
})
export class UserModule {}
