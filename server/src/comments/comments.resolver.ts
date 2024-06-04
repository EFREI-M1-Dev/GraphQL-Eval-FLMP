import {
  Resolver,
  Query,
  Mutation,
  Args,
  Root,
  Context,
  ResolveField,
} from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { GraphQLContext } from 'src/interfaces/graphql-context.interface';
import { Comment } from '@prisma/client';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Resolver('Comment')
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @ResolveField()
  author(@Root() comments: Comment) {
    return this.commentsService.findOne(comments.id).author();
  }

  @ResolveField()
  article(@Root() comments: Comment) {
    return this.commentsService.findOne(comments.id).article();
  }

  @Mutation('createComment')
  create(
    @Args('CreateCommentInput') createCommentInput: CreateCommentInput,
    @Context() context: GraphQLContext,
  ) {
    return this.commentsService.create(
      createCommentInput,
      context.req.user.userId,
    );
  }

  @Query('comments')
  findAll() {
    return this.commentsService.findAll();
  }

  @Query('comment')
  findOne(@Args('id') id: number) {
    return this.commentsService.findOne(id);
  }

  @Mutation('updateComment')
  update(@Args('UpdateCommentInput') updateCommentInput: UpdateCommentInput) {
    return this.commentsService.update(updateCommentInput);
  }

  @Mutation('removeComment')
  remove(@Args('id') id: number) {
    return this.commentsService.remove(id);
  }
}
