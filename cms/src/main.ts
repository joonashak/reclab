import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(helmet());
  console.log('furl', process.env.FRONTEND_URL);
  app.enableCors({ origin: process.env.FRONTEND_URL || false })
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
