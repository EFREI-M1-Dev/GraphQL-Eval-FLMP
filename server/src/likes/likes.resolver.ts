import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Root,
} from '@nestjs/graphql';
import { LikesService } from './likes.service';
import { CreateLikeInput } from './dto/create-like.input';
import { UpdateLikeInput } from './dto/update-like.input';
import { Like } from '@prisma/client';

@Resolver('Like')
export class LikesResolver {
  constructor(private readonly likesService: LikesService) {}

  @ResolveField()
  user(@Root() likes: Like) {
    return this.likesService.findOne(likes.id).user();
  }

  @ResolveField()
  article(@Root() likes: Like) {
    return this.likesService.findOne(likes.id).article();
  }

  @Mutation('createLike')
  create(@Args('createLikeInput') createLikeInput: CreateLikeInput) {
    return this.likesService.create(createLikeInput);
  }

  @Query('likes')
  findAll() {
    return this.likesService.findAll();
  }

  @Query('like')
  findOne(@Args('id') id: number) {
    return this.likesService.findOne(id);
  }

  @Mutation('updateLike')
  update(@Args('updateLikeInput') updateLikeInput: UpdateLikeInput) {
    return this.likesService.update(updateLikeInput.id, updateLikeInput);
  }

  @Mutation('removeLike')
  remove(@Args('id') id: number) {
    return this.likesService.remove(id);
  }
}
