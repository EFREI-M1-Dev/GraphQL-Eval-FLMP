
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

export interface CreateLikeInput {
    userId: number;
    articleId: number;
}

export interface UpdateLikeInput {
    id: number;
}

export interface CreateUserInput {
    username?: Nullable<string>;
    password?: Nullable<string>;
}

export interface Article {
    id: number;
    title?: Nullable<string>;
    content?: Nullable<string>;
    image?: Nullable<string>;
    createdAt?: Nullable<Timestamp>;
    author?: Nullable<User>;
    likes?: Nullable<Like[]>;
}

export interface IQuery {
    articles(): Nullable<Article>[] | Promise<Nullable<Article>[]>;
    article(id: number): Nullable<Article> | Promise<Nullable<Article>>;
    likes(): Nullable<Like>[] | Promise<Nullable<Like>[]>;
    like(id: number): Nullable<Like> | Promise<Nullable<Like>>;
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(username: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createArticle(createArticleInput: CreateArticleInput): Article | Promise<Article>;
    updateArticle(updateArticleInput: UpdateArticleInput): Article | Promise<Article>;
    removeArticle(id: number): Nullable<Article> | Promise<Nullable<Article>>;
    login(loginUserInput: LoginUserInput): LoginResponse | Promise<LoginResponse>;
    signup(loginUserInput: LoginUserInput): User | Promise<User>;
    createLike(createLikeInput: CreateLikeInput): Like | Promise<Like>;
    updateLike(updateLikeInput: UpdateLikeInput): Like | Promise<Like>;
    removeLike(id: number): Nullable<Like> | Promise<Nullable<Like>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
}

export interface LoginResponse {
    user: User;
    token: string;
}

export interface Like {
    id: number;
    user?: Nullable<User>;
    article?: Nullable<Article>;
}

export interface User {
    id: number;
    username?: Nullable<string>;
    avatar?: Nullable<string>;
    articles?: Nullable<Article[]>;
    likes?: Nullable<Like[]>;
}

export type Timestamp = any;
type Nullable<T> = T | null;
