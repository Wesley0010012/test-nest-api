import { Module } from '@nestjs/common';
import { TestModule } from './common/infra/test-module';

@Module({
  imports: [TestModule],
})
export class AppModule {}
