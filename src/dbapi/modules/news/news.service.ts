import { Injectable } from '@nestjs/common';
// import { News } from '../../dto/news.dto'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsEntity } from '../../../dbapi/database/entities/news.entity';

@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsEntity)
        private readonly newsRepository: Repository<NewsEntity>,
    ) { }
    //private readonly news: News[]=[];

    async create(news: NewsEntity) {
        return await this.newsRepository.save(news);
    }

    async findAll(): Promise<NewsEntity[]> {
        return await this.newsRepository.find({});
    }

    async findById(id: number): Promise<NewsEntity | undefined> {
        return await this.newsRepository.findOne({ where: { id, }, });
    }

    async remove(id: number) {
        const _news = await this.findById(id);
        if (_news) return await this.newsRepository.remove(_news);
    }

    // async updateNews (data: Posts): Promise<Posts> {
    //     const existingPost = await this.postsRepository.findOne({
    //       where: {
    //         id: data.id,
    //       },
    //     });
    //     return this.postsRepository.save({
    //       ...existingPost,
    //       ...data,
    //     });
    //   }

    // async update(id: number, data: News): Promise<News> {
    //     if (typeof this.news[id] !== 'undefined') {
    //         let existingNews = this.news[id];
    //         existingNews = {
    //             ...existingNews,
    //             ...data,
    //         };
    //         this.news[id] = existingNews;
    //         return this.news[id];
    //     } else throw new Error('News not found');

    // }



    // findByIndex(index: number): News | null {
    //     console.assert(typeof this.news[index] !== 'undefined', '[findByIndex] Invalid');
    //     if (typeof this.news[index] !== 'undefined') {
    //         return this.news[index]
    //     }
    //     return null
    // }
}
