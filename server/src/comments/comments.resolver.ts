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
    @Context() context: GraphQLContext,
    @Args('articleId') articleId: number,
    @Args('text') text: string,
  ) {
    return this.commentsService.create(
      articleId,
      text,
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

  @Mutation('removeComment')
  remove(@Args('id') id: number) {
    return this.commentsService.remove(id);
  }
}
