import { Body, Controller, Get, Param, Post, Query, UploadedFile } from '@nestjs/common';
import { create } from 'domain';
import { NewsEntity } from '../database/entities/news.entity';

import { NewsCreateDto } from '../dto/news.dto';
import { NewsService } from '../modules/news/news.service';
import { MailService } from '../../mail/mail.service'

const PATH_NEWS = '/news-static/';

@Controller('news')
export class NewsController {
constructor(
  private newsService: NewsService,
  // private mailService: MailService
  ) {}

    // @Get('all')
    // async getNews(): Promise<News[]> {
    //     return this.newService.findAll();
    // }

    // @Post('create')
    // async createNews(@Body() data: News): Promise<number> {
    //   return this.newService.create(data);
    // }

    async create(
      @Body() news: NewsCreateDto, 
      @UploadedFile() cover: Express.Multer.File,
      ){
      const _newsEntity = new NewsEntity(); // создаём пустую entity-схему 
      if (cover?.filename?.length > 0) {
      _newsEntity.cover = PATH_NEWS + cover.filename; // записываем в поле cover-значения
      }
      _newsEntity.title = news.title; // записываем в поле title-значения 
      _newsEntity.description = news.description;       // записываем в поле description-значения
      // Обращаемся к методу сервиса и передаём созданную схему 
      const _news = await this.newsService.create(_newsEntity); 
      // await this.mailService.sendNewNewsForAdmins(
      // ['snezhkinv@yandex.ru', 'snezhkinv20@gmail.com'],
      // _news, );
      return _news; 
    }

    // @Post()
    // async updateNews (@Query() query: { id: number }, @Body() data: News): Promise<News> {
    //   return this.newService.update(query.id-1, data);
    // }
}
