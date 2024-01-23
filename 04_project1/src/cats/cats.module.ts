import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from 'src/auth/auth.module';
import { CatsController } from './cats.controller';
import { CatsRepository } from './cats.repository';
import { Cat, CatSchema } from './cats.schema';
import { CatsService } from './cats.service';

// nest g mo cats 로 자동으로 모듈 생성

@Module({
  imports: [
    MulterModule.register({
      dest: './upload',
    }),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
    // 순환 모듈 문제 해결을 위해서 forwardRef 사용
    forwardRef(() => AuthModule),
  ],
  controllers: [CatsController],
  providers: [CatsService, CatsRepository], // providers만 있다면 캡슐화 되어 외부에서 사용 못함. 아래처럼 export 해줘야함.
  exports: [CatsService, CatsRepository],
})
export class CatsModule {}
