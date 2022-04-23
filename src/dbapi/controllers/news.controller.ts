import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { create } from 'domain';

import { News } from '../dto/news.dto';
import { NewsService } from '../modules/news/news.service';

@Controller('news')
export class NewsController {
constructor(private newService: NewsService) {}

    @Get('all')
    async getNews(): Promise<News[]> {
        return this.newService.findAll();
    }

    @Post('create')
    async createNews(@Body() data: News): Promise<number> {
      return this.newService.create(data);
    }

    @Post()
    async updateNews (@Query() query: { id: number }, @Body() data: News): Promise<News> {
      return this.newService.update(query.id-1, data);
    }
}
