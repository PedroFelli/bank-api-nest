import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ModelNotFoundException } from './exeception-filters/model-not-found.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new ModelNotFoundException());
  await app.listen(3000);
}
bootstrap();
