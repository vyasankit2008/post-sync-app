import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );

  const port = process.env.PORT || 500;

  await app.listen(port);

  const logger = new Logger('Bootstrap');

  logger.log(`
    🚀 Application is running!

    🌐 Server: http://localhost:${port}/
    📚 Environment: ${process.env.NODE_ENV || 'development'}
    🕒 Started at: ${new Date().toLocaleString()}
  `);
}

bootstrap();