import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// nest g mo cats 로 자동으로 모듈 생성

@Module({
  controllers: [CatsController],
  providers: [CatsService], // providers만 있다면 모듈화 되어 외부에서 사용 못함. 아래처럼 export 해줘야함.
  exports: [CatsService],
})
export class CatsModule {}
