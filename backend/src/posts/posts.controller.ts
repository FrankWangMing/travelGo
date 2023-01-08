import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostInput } from './dto/createPost.input';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}
  @Post('/create')
  createPosts(@Body() post: CreatePostInput) {
    return this.postService.createPost(post);
  }
}
