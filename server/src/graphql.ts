
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

export interface LoginUserInput {
    username: string;
    password: string;
}

export interface CreateUserInput {
    username?: Nullable<string>;
    password?: Nullable<string>;
}

export interface Article {
    id: number;
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export interface IQuery {
    articles(): Nullable<Article>[] | Promise<Nullable<Article>[]>;
    article(id: number): Nullable<Article> | Promise<Nullable<Article>>;
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(username: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createArticle(createArticleInput: CreateArticleInput): Article | Promise<Article>;
    updateArticle(updateArticleInput: UpdateArticleInput): Article | Promise<Article>;
    removeArticle(id: number): Nullable<Article> | Promise<Nullable<Article>>;
    login(loginUserInput: LoginUserInput): LoginResponse | Promise<LoginResponse>;
    signup(loginUserInput: LoginUserInput): User | Promise<User>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
}

export interface LoginResponse {
    user: User;
    token: string;
}

export interface User {
    id: number;
    username?: Nullable<string>;
}

type Nullable<T> = T | null;
