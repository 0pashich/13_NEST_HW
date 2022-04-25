import { Module } from '@nestjs/common';
import { PostsModule } from './modules/posts/posts.module';
import { PostsController } from './controllers/posts.controller';
import { DatabaseModule } from './database/database.module';
import { CommentsModule } from './modules/comments/comments.module';
import { CommentsController } from './controllers/comments.controller';
import { UsersModule } from './modules/users/users.module';
import { NewsModule } from './modules/news/news.module';
import { UsersController } from './controllers/users.controller';
import { NewsController } from './controllers/news.controller';
import { CategoriesModule } from './modules/categories/categories.module';
import { CategoriesController } from './controllers/categories.controller';

@Module({
  imports: [DatabaseModule, PostsModule, CommentsModule, UsersModule, NewsModule, CategoriesModule],
  controllers: [PostsController, CommentsController, UsersController, NewsController, CategoriesController],
})
export class ApiModule {}
