import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}
  async create(createCommentInput: CreateCommentInput, authorId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: authorId } });
    if (user === null) {
      throw new Error('Author not found');
    }

    const article = await this.prisma.article.findUnique({
      where: { id: createCommentInput.articleId },
    });
    if (article === null) {
      throw new Error('Article not found');
    }

    if (createCommentInput.text.length < 1) {
      throw new Error('Text is too short');
    }

    return this.prisma.comment.create({
      data: {
        authorId: authorId,
        articleId: createCommentInput.articleId,
        text: createCommentInput.text,
      },
    });
  }

  findAll() {
    return this.prisma.comment.findMany();
  }

  findOne(id: number) {
    return this.prisma.comment.findUnique({ where: { id: id } });
  }

  update(updateCommentInput: UpdateCommentInput) {
    return this.prisma.comment.update({
      where: { id: updateCommentInput.id },
      data: { text: updateCommentInput.text },
    });
  }

  remove(id: number) {
    return this.prisma.comment.delete({ where: { id: id } });
  }
}
