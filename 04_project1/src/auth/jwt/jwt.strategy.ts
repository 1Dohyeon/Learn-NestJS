import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CatsRepository } from 'src/cats/cats.repository';

// 인증을 할 때 사용
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly catsRepository: CatsRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret', // env로 교체 예정
      ignoreExpiration: false,
    });
  }

  // async validate(payload: Payload) {
  //   const cat = await this.catsRepository.findCatByIdWithoutPassword(
  //     payload.sub,
  //   );

  //   if (cat) {
  //     return cat; // request.user
  //   } else {
  //     throw new UnauthorizedException('접근 오류');
  //   }
  // }
}
