import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Root,
} from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GraphQLContext } from 'src/interfaces/graphql-context.interface';
import { Article } from '@prisma/client';
import { ArticleSortInput } from './dto/sort-article.input';
import { ArticleFilterInput } from './dto/filter-article-input';

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

  @ResolveField()
  author(@Root() articles: Article) {
    return this.articlesService.findOne(articles.id).author();
  }

  @ResolveField()
  likes(@Root() articles: Article) {
    return this.articlesService.findOne(articles.id).likes();
  }

  @Query('articles')
  findAll(
    @Args('filter', { nullable: true }) filter?: ArticleFilterInput,
    @Args('sort', { nullable: true }) sort?: ArticleSortInput,
  ) {
    return this.articlesService.findAll(filter, sort);
  }

  @Query('article')
  findOne(@Args('id') id: number) {
    return this.articlesService.findOne(id);
  }

  @Query('getArticleLikesCount')
  getArticleLikesCount(@Args('id') id: number) {
    return this.articlesService.getArticleLikesCount(id);
  }

  @Query('hasUserLikedArticle')
  @UseGuards(JwtAuthGuard)
  hasUserLikedArticle(
    @Args('id') id: number,
    @Context() context: GraphQLContext,
  ) {
    return this.articlesService.hasUserLikedArticle(
      id,
      context.req.user.userId,
    );
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
