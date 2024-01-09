import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// nest g mo cats 로 자동으로 모듈 생성

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
