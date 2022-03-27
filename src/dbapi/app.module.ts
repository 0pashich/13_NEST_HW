import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { Posts } from './database/entities/post.entity';
import { NewsModule } from './news/news.module';
import { CalcModule } from './calc/calc.module';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Posts]), NewsModule, CalcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
