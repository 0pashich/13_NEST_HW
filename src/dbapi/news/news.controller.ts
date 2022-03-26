import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { News } from './news.interface';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
constructor(private newService: NewsService) {}

    @Get()
    async getNews(): Promise<News[]> {
        return this.newService.findAll();
    }

    @Post()
    async createNews(@Body() data: News):Promise<number> {
      return this.newService.create(data);
    }
}
