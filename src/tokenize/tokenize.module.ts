import { Module } from '@nestjs/common';
import { TokenizeService } from './tokenize.service';

@Module({
  providers: [TokenizeService]
})
export class TokenizeModule {}
