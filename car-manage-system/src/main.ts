import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true })); // Enable validation globally
  await app.listen(process.env.PORT ?? 3000); // Application runs on http://localhost:3000
}
bootstrap();
