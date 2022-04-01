import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PostsService } from '../modules/posts/posts.service';
<<<<<<< hw2
import { Posts } from '../dto/post.dto';
import { htmlTemplate } from '../../views/template';
import { postTemplate } from '../../views/post';
=======
import { PostsDTO } from '../dto/post.dto';
>>>>>>> put lesson 3 project

@Controller('posts')
export class PostsController {
  constructor(private readonly appService: PostsService) {}

  @Get('get-all')
  async getPosts(): Promise<PostsDTO[]> {
    return this.appService.getPosts();
  }

  @Get('get-one')
  async getPost(@Query() query: { id: number }): Promise<PostsDTO | undefined> {
    return this.appService.getPost(query.id);
  }

  @Post('create')
  async createPost(@Body() data: PostsDTO): Promise<PostsDTO> {
    return this.appService.createPost(data);
  }

  @Delete('delete')
  async deletePost(@Body() body: { id: number }): Promise<PostsDTO[]> {
    return this.appService.deletePost(body.id);
  }

  @Put('update')
  async updatePost(@Body() data: PostsDTO): Promise<PostsDTO> {
    return this.appService.updatePost(data);
  }

  @Get(':id/detail')
  async getDetailPost(@Param('id') id: number): Promise<string> {
    const post = this.appService.getPost(id);
    return htmlTemplate(postTemplate(post));
  }

  
}
