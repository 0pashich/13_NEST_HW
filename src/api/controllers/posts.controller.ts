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
import { Posts } from '../dto/post.dto';
import { htmlTemplate } from '../../views/template';
import { postTemplate } from '../../views/post';

@Controller('posts')
export class PostsController {
  constructor(private readonly appService: PostsService) {}

  @Get('get-all')
  async getPosts(): Promise<Posts[]> {
    return this.appService.getPosts();
  }

  @Get('get-one')
  async getPost(@Query() query: { id: number }): Promise<Posts | undefined> {
    return this.appService.getPost(query.id);
  }

  @Post('create')
  async createPost(@Body() data: Posts): Promise<Posts> {
    return this.appService.createPost(data);
  }

  @Delete('delete')
  async deletePost(@Body() body: { id: number }): Promise<Posts[]> {
    return this.appService.deletePost(body.id);
  }

  @Put('update')
  async updatePost(@Body() data: Posts): Promise<Posts> {
    return this.appService.updatePost(data);
  }

  @Get(':id/detail')
  async getDetailPost(@Param('id') id: number): Promise<string> {
    const post = this.appService.getPost(id);
    return htmlTemplate(postTemplate(post));
  }

  
}
