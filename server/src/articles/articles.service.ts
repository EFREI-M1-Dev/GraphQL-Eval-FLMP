import { Injectable } from '@nestjs/common';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';

@Injectable()
export class ArticlesService {
  // Mock
  private articles = [
    {
      id: 1,
      title: 'title1',
      content: 'text1',
    },
    {
      id: 2,
      title: 'title2',
      content: 'text2',
    },
  ];

  create(createArticleInput: CreateArticleInput) {
    const { title, content } = createArticleInput;

    const newArticle = {
      id: this.articles.length + 1,
      title,
      content,
    };

    this.articles.push(newArticle);

    return newArticle;
  }

  findAll() {
    return this.articles;
  }

  findOne(id: number) {
    return this.articles.find((article) => article.id === id);
  }

  update(id: number, updateArticleInput: UpdateArticleInput) {
    const { title, content } = updateArticleInput;

    const articleToUpdate = this.articles.find((article) => article.id === id);

    if (!articleToUpdate) {
      throw new Error(`Article with ID ${id} not found`);
    }

    if (title !== undefined) {
      articleToUpdate.title = title;
    }
    if (content !== undefined) {
      articleToUpdate.content = content;
    }

    return articleToUpdate;
  }

  remove(id: number) {
    const index = this.articles.findIndex((article) => article.id === id);

    if (index === -1) {
      throw new Error(`Article with ID ${id} not found`);
    }

    this.articles.splice(index, 1);

    return `Article with ID ${id} has been removed`;
  }
}
