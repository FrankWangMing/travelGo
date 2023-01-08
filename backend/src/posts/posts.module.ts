import { Module } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { PostsController } from './posts.controller';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [PostsService, PostsResolver, GqlAuthGuard],
})
export class PostsModule {}
