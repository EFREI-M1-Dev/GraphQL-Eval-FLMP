import { Injectable } from '@nestjs/common';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { ArticleSortInput } from './dto/sort-article.input';
import { ArticleFilterInput } from './dto/filter-article-input';
import { Prisma } from '@prisma/client';
import { getRandomInt } from 'src/utils/random';

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
        image: `http://localhost:3000/static/cover-${getRandomInt(1, 4)}.jpg`,
      },
    });
  }

  findAll(filter?: ArticleFilterInput, sort?: ArticleSortInput) {
    const where: Prisma.ArticleWhereInput = {};

    if (filter?.title) {
      where.title = {
        contains: filter.title,
      };
    }

    if (filter?.authorId) {
      where.authorId = filter.authorId;
    }

    if (filter?.createdAfter) {
      where.createdAt = {
        gte: filter.createdAfter,
      };
    }

    if (filter?.createdBefore) {
      where.createdAt = {
        lte: filter.createdBefore,
      };
    }

    const orderBy: Prisma.ArticleOrderByWithRelationInput[] = [];
    if (sort?.likes) {
      orderBy.push({ likes: { _count: sort.likes } });
    }
    if (sort?.createdAt) {
      orderBy.push({ createdAt: sort.createdAt });
    }

    return this.prisma.article.findMany({
      where,
      orderBy,
      include: {
        likes: true,
        author: true,
      },
    });
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

  async remove(id: number) {
    await this.prisma.like.deleteMany({
      where: { articleId: id },
    });

    return this.prisma.article.delete({
      where: { id: id },
    });
  }
}
