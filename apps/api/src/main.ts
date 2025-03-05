import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{logger: ['error', 'warn', 'log', 'debug', 'verbose']});
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Intergration service API')
    .setDescription('OpenAPI documentation for the Intergration service API')
    .setVersion('1.0')
    .addTag('intergration')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
