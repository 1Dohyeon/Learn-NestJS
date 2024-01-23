import { ValidationPipe } from '@nestjs/common';
import { NestApplication, NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import * as expressBasicAuth from 'express-basic-auth';
import * as path from 'path';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);

  // schema 에서 설계한 class-validator를 사용하기 위해서 필요함
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  // Swagger
  app.use(
    ['/docs', '/docs-json'],
    expressBasicAuth({
      challenge: true,
      users: {
        [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
      },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('C.I.C')
    .setDescription('cat')
    .setVersion('1.0.0')
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // CORS
  app.enableCors({
    origin: true, // 배포할 때는 특정 url로 수정
    credentials: true,
  });

  // port
  const PORT = process.env.PORT;
  await app.listen(PORT);

  // 데이터 베이스에서는 이미지의 경로가 저장된다. 이 middleware를 서버에 있는 static 파일들을 제공하기 위해서 사용함
  app.useStaticAssets(path.join(__dirname, './common', 'uploads'), {
    pefix: './media',
  });
}
bootstrap();
