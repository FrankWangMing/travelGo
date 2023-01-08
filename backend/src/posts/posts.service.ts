import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'nestjs-prisma';
import { CreatePostInput } from './dto/createPost.input';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}
  createPost(post: CreatePostInput): any {
    // const id = this.jwtService.decode(token)['userId'];
    return this.prisma.post.create({
      data: {
        published: true,
        ...post,
        // authorId: id,
      },
    });
  }

  getHelloName(name: string): string {
    return `Hello ${name}!`;
  }
}
