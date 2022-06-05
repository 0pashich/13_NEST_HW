import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  UploadedFile,
} from '@nestjs/common';
import { create } from 'domain';
import { NewsEntity } from '../database/entities/news.entity';

import { NewsCreateDto, NewsIdDto } from '../dto/news.dto';
import { NewsService } from '../modules/news/news.service';
import { MailService } from '../../mail/mail.service';
import { UsersService } from '../modules/users/users.service';
import { CategoriesService } from '../modules/categories/categories.service';

const PATH_NEWS = '/news-static/';

@Controller('news')
export class NewsController {
  constructor(
    private newsService: NewsService,
    private usersService: UsersService,
    private categoriesService: CategoriesService, // private mailService: MailService
  ) {}

  @Get('all')
  async getNews(@Query() query: { authorId: number }) {
    if (query.authorId) {
      console.log('authorId:', query.authorId);
      return this.newsService.findAllByUserId(query.authorId);
    }

    return this.newsService.findAll();
  }

  // @Post('create')
  // async createNews(@Body() data: News): Promise<number> {
  //   return this.newService.create(data);
  // }
  @Post()
  async create(
    @Body() news: NewsCreateDto,
    @UploadedFile() cover: Express.Multer.File,
  ) {
    const _user = await this.usersService.findById(news.authorId);
    if (!_user) {
      throw new HttpException(
        'Не существует такого автора',
        HttpStatus.BAD_REQUEST,
      );
    }
    const _category = await this.categoriesService.findById(news.categoryId);
    if (!_category) {
      throw new HttpException(
        'Не существует такой категории',
        HttpStatus.BAD_REQUEST,
      );
    }

    const _newsEntity = new NewsEntity(); // создаём пустую entity-схему
    if (cover?.filename?.length > 0) {
      _newsEntity.cover = PATH_NEWS + cover.filename; // записываем в поле cover-значения
    }
    _newsEntity.title = news.title; // записываем в поле title-значения
    _newsEntity.description = news.description; // записываем в поле description-значения
    _newsEntity.user = _user;
    _newsEntity.category = _category;
    _newsEntity.createdAt = new Date();
    // Обращаемся к методу сервиса и передаём созданную схему
    const _news = await this.newsService.create(_newsEntity);
    // await this.mailService.sendNewNewsForAdmins(
    // ['snezhkinv@yandex.ru', 'snezhkinv20@gmail.com'],
    // _news, );
    return _news;
  }

  @Get(':id')
  async getById(@Param() params: NewsIdDto): Promise<NewsEntity | undefined> {
    return this.newsService.findById(Number(params.id));
  }

  @Delete(':id')
  async remove(@Param() params: NewsIdDto): Promise<boolean | undefined> {
    return (
      (await this.newsService.remove(params.id)) && true
      // this.commentService.removeAll(params.id)
    );
  }
  // @Post()
  // async updateNews (@Query() query: { id: number }, @Body() data: News): Promise<News> {
  //   return this.newService.update(query.id-1, data);
  // }
}
