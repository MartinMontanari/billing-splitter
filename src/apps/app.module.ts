import { Module } from '@nestjs/common';
import { services, repositories, controllers } from './config/ApplicationDI';

@Module({
  imports: [],
  controllers: [...controllers],
  providers: [...services, ...repositories],
})
export class AppModule {}
