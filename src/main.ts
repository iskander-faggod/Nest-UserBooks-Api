import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
  const options = new DocumentBuilder()
    .setTitle('User-Book API')
    .setDescription('The test task')
    .setVersion('1.0')
    .addTag('shopApi')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
}
bootstrap().then(r => console.log('Connected'));
