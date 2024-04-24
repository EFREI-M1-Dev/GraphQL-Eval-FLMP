
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateArticleInput {
    title: string;
    content: string;
}

export interface UpdateArticleInput {
    id: number;
    title: string;
    content: string;
}

export interface Article {
    id: number;
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export interface IQuery {
    articles(): Nullable<Article>[] | Promise<Nullable<Article>[]>;
    article(id: number): Nullable<Article> | Promise<Nullable<Article>>;
}

export interface IMutation {
    createArticle(createArticleInput: CreateArticleInput): Article | Promise<Article>;
    updateArticle(updateArticleInput: UpdateArticleInput): Article | Promise<Article>;
    removeArticle(id: number): Nullable<Article> | Promise<Nullable<Article>>;
}

type Nullable<T> = T | null;