import { Injectable } from '@nestjs/common';
import {News} from './news.interface'

@Injectable()
export class NewsService {
    private readonly news: News[]=[];

    create (news: News): number {
        return this.news.push(news);
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

    async update (id: number, data: News): Promise<News> {
        if (typeof this.news[id] !=='undefined'){
        let existingNews = this.news[id];
        existingNews = {
          ...existingNews,
          ...data,
        };
        this.news[id] = existingNews;
        return this.news[id];
        } else throw new Error('News not found');
        
      }

    findAll (): News[]{
        return this.news;
    }

    findByIndex (index: number) : News|null{
        console.assert( typeof this.news[index] !== 'undefined', '[findByIndex] Invalid');
        if (typeof this.news[index] !=='undefined'){
            return this.news[index]
        }
        return null
    }
}
