import { Injectable } from '@nestjs/common';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(createArticleInput: CreateArticleInput, username: string) {
    return this.prisma.article.create({
      data: {
        title: createArticleInput.title,
        content: createArticleInput.content,
        author: {
          connect: { username },
        },
      },
    });
  }

  findAll() {
    return this.prisma.article.findMany();
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({ where: { id } });
  }

  update(id: number, updateArticleInput: UpdateArticleInput) {
    return this.prisma.article.update({
      data: { ...updateArticleInput },
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({ where: { id } });
  }
}
