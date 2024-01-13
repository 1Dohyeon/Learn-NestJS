import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  // 몽구스에서 자동으로 id를 주므로 id만 사용
  @ApiProperty({
    example: 'dsf23tf45',
    description: 'id',
  })
  id: string;
}
