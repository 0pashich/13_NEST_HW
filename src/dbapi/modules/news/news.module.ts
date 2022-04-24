import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsEntity } from '../../../dbapi/database/entities/news.entity';
import { NewsController } from '../../controllers/news.controller';
import { NewsService } from './news.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [TypeOrmModule.forFeature([NewsEntity])],
  exports: [NewsService],
})
export class NewsModule {}
