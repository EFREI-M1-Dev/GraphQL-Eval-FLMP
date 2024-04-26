import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GraphQLContext } from 'src/interfaces/graphql-context.interface';

@Resolver('Article')
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  @Mutation('createArticle')
  @UseGuards(JwtAuthGuard)
  create(
    @Args('createArticleInput') createArticleInput: CreateArticleInput,
    @Context() context: GraphQLContext,
  ) {
    return this.articlesService.create(
      createArticleInput,
      context.req.user.username,
    );
  }

  @Query('articles')
  findAll() {
    return this.articlesService.findAll();
  }

  @Query('article')
  findOne(@Args('id') id: number) {
    return this.articlesService.findOne(id);
  }

  @Mutation('updateArticle')
  update(@Args('updateArticleInput') updateArticleInput: UpdateArticleInput) {
    return this.articlesService.update(
      updateArticleInput.id,
      updateArticleInput,
    );
  }

  @Mutation('removeArticle')
  remove(@Args('id') id: number) {
    return this.articlesService.remove(id);
  }
}
