// src/main.ts

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  const configService = app.get(ConfigService);
  console.log('Database Host:', configService.get<string>('DB_HOST'));
  console.log('JWT Secret:', configService.get<string>('JWT_SECRET'));
  await app.listen(configService.get<number>('PORT') || 3000);
}
bootstrap();
