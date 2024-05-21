import { Injectable } from '@nestjs/common';
import { CreateLikeInput } from './dto/create-like.input';
import { UpdateLikeInput } from './dto/update-like.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LikesService {
  constructor(private prisma: PrismaService) {}

  create(createLikeInput: CreateLikeInput) {
    return this.prisma.like.create({
      data: {
        userId: createLikeInput.userId,
        articleId: createLikeInput.articleId,
      },
    });
  }

  findAll() {
    return this.prisma.like.findMany();
  }

  findOne(id: number) {
    return this.prisma.like.findUnique({ where: { id } });
  }

  update(id: number, updateLikeInput: UpdateLikeInput) {
    return this.prisma.like.update({
      data: { ...updateLikeInput },
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.like.delete({ where: { id } });
  }
}
