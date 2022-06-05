import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../../../dbapi/database/entities/users.entity';
import { NewsEntity } from '../../../dbapi/database/entities/news.entity';
import { NewsController } from '../../controllers/news.controller';
import { UsersService } from '../users/users.service';
import { NewsService } from './news.service';
import { CategoriesEntity } from '../../../dbapi/database/entities/categories.entity';
import { CategoriesService } from '../categories/categories.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService, UsersService,CategoriesService],
  imports: [TypeOrmModule.forFeature([NewsEntity,UsersEntity,CategoriesEntity])],
  exports: [NewsService],
})
export class NewsModule {}
