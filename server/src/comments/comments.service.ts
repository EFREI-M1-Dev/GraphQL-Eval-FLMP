import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import { Article, User } from 'src/graphql';

@Injectable()
export class CommentsService {

  constructor(private prisma: PrismaService) {}
  async create(articleId: number, text: string, authorId: number) {

    const user = await this.prisma.user.findUnique({where: {id: authorId}});
    if(user === null) {
      throw new Error('Author not found');
    }

    const article = await this.prisma.article.findUnique({where: {id: articleId}});
    if(article === null) {
      throw new Error('Article not found');
    }

    if(text.length < 1) {
      throw new Error('Text is too short');
    }

    return this.prisma.comment.create({
      data: {
        authorId: authorId,
        articleId: articleId,
        text: text },
    });
  }

  findAll() {
    return this.prisma.comment.findMany();
  }

  findOne(id: number) {
    return this.prisma.comment.findUnique({where: {id: id}});
  }

  // update(id: number, updateCommentInput: UpdateCommentInput) {
  //   return `This action updates a #${id} comment`;
  // }

  remove(id: number) {
    return this.prisma.comment.delete({where: {id: id}});
  }
}