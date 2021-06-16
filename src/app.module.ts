import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './modules/Book /book.module';
import { Book } from './modules/Book /entities/book.entity';
import { UserModule } from './modules/User/user.module';
import { User } from './modules/User/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    entities: [Book, User],
    autoLoadEntities: true,
  }),
    BookModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}


