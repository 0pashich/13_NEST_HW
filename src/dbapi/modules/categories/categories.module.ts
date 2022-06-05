import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from '../../../dbapi/controllers/categories.controller';
import { CategoriesEntity } from '../../../dbapi/database/entities/categories.entity';
import { CategoriesService } from './categories.service';

@Module({
    controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [TypeOrmModule.forFeature([CategoriesEntity])],
  exports: [CategoriesService],
})
export class CategoriesModule {}
