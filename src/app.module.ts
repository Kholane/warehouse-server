import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductControllerController } from './product-controller/product-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductControllerController],
  providers: [AppService],
})
export class AppModule {}
