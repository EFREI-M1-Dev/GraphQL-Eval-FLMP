import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Timestamp: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  likes?: Maybe<Array<Like>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ArticleFilterInput = {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  createdAfter?: InputMaybe<Scalars['Timestamp']['input']>;
  createdBefore?: InputMaybe<Scalars['Timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleSortInput = {
  createdAt?: InputMaybe<SortOrder>;
  likes?: InputMaybe<SortOrder>;
};

export type CreateArticleInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateLikeInput = {
  articleId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type CreateUserInput = {
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Like = {
  __typename?: 'Like';
  article?: Maybe<Article>;
  id: Scalars['Int']['output'];
  user?: Maybe<User>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: Article;
  createLike: Like;
  createUser: User;
  login: LoginResponse;
  removeArticle?: Maybe<Article>;
  removeLike?: Maybe<Like>;
  signup: User;
  updateArticle: Article;
  updateLike: Like;
};


export type MutationCreateArticleArgs = {
  createArticleInput: CreateArticleInput;
};


export type MutationCreateLikeArgs = {
  createLikeInput: CreateLikeInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRemoveArticleArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveLikeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSignupArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationUpdateArticleArgs = {
  updateArticleInput: UpdateArticleInput;
};


export type MutationUpdateLikeArgs = {
  updateLikeInput: UpdateLikeInput;
};

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles: Array<Maybe<Article>>;
  like?: Maybe<Like>;
  likes: Array<Maybe<Like>>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
};


export type QueryArticleArgs = {
  id: Scalars['Int']['input'];
};


export type QueryArticlesArgs = {
  filter?: InputMaybe<ArticleFilterInput>;
  sort?: InputMaybe<ArticleSortInput>;
};


export type QueryLikeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  username: Scalars['String']['input'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type UpdateArticleInput = {
  content: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type UpdateLikeInput = {
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  articles?: Maybe<Array<Article>>;
  avatar?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  likes?: Maybe<Array<Like>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type GetArticleQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetArticleQuery = { __typename?: 'Query', article?: { __typename?: 'Article', title?: string | null, content?: string | null, image?: string | null, createdAt?: any | null, author?: { __typename?: 'User', id: number, username?: string | null, avatar?: string | null } | null } | null };

export type GetArticlesQueryVariables = Exact<{
  sort: ArticleSortInput;
}>;


export type GetArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', id: number, title?: string | null, content?: string | null, image?: string | null, createdAt?: any | null, author?: { __typename?: 'User', username?: string | null, avatar?: string | null } | null } | null> };

export type CreateArticleMutationVariables = Exact<{
  input: CreateArticleInput;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'Article', id: number, title?: string | null, content?: string | null } };

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', token: string, user: { __typename?: 'User', username?: string | null, avatar?: string | null } } };

export type RegisterMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', username?: string | null } };


export const GetArticleDocument = gql`
    query GetArticle($id: Int!) {
  article(id: $id) {
    title
    content
    image
    createdAt
    author {
      id
      username
      avatar
    }
  }
}
    `;

/**
 * __useGetArticleQuery__
 *
 * To run a query within a React component, call `useGetArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArticleQuery(baseOptions: Apollo.QueryHookOptions<GetArticleQuery, GetArticleQueryVariables> & ({ variables: GetArticleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, options);
      }
export function useGetArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticleQuery, GetArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, options);
        }
export function useGetArticleSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetArticleQuery, GetArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, options);
        }
export type GetArticleQueryHookResult = ReturnType<typeof useGetArticleQuery>;
export type GetArticleLazyQueryHookResult = ReturnType<typeof useGetArticleLazyQuery>;
export type GetArticleSuspenseQueryHookResult = ReturnType<typeof useGetArticleSuspenseQuery>;
export type GetArticleQueryResult = Apollo.QueryResult<GetArticleQuery, GetArticleQueryVariables>;
export const GetArticlesDocument = gql`
    query GetArticles($sort: ArticleSortInput!) {
  articles(sort: $sort) {
    id
    title
    content
    image
    createdAt
    author {
      username
      avatar
    }
  }
}
    `;

/**
 * __useGetArticlesQuery__
 *
 * To run a query within a React component, call `useGetArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticlesQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetArticlesQuery(baseOptions: Apollo.QueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables> & ({ variables: GetArticlesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, options);
      }
export function useGetArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, options);
        }
export function useGetArticlesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, options);
        }
export type GetArticlesQueryHookResult = ReturnType<typeof useGetArticlesQuery>;
export type GetArticlesLazyQueryHookResult = ReturnType<typeof useGetArticlesLazyQuery>;
export type GetArticlesSuspenseQueryHookResult = ReturnType<typeof useGetArticlesSuspenseQuery>;
export type GetArticlesQueryResult = Apollo.QueryResult<GetArticlesQuery, GetArticlesQueryVariables>;
export const CreateArticleDocument = gql`
    mutation CreateArticle($input: CreateArticleInput!) {
  createArticle(createArticleInput: $input) {
    id
    title
    content
  }
}
    `;
export type CreateArticleMutationFn = Apollo.MutationFunction<CreateArticleMutation, CreateArticleMutationVariables>;

/**
 * __useCreateArticleMutation__
 *
 * To run a mutation, you first call `useCreateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArticleMutation, { data, loading, error }] = useCreateArticleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateArticleMutation(baseOptions?: Apollo.MutationHookOptions<CreateArticleMutation, CreateArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateArticleMutation, CreateArticleMutationVariables>(CreateArticleDocument, options);
      }
export type CreateArticleMutationHookResult = ReturnType<typeof useCreateArticleMutation>;
export type CreateArticleMutationResult = Apollo.MutationResult<CreateArticleMutation>;
export type CreateArticleMutationOptions = Apollo.BaseMutationOptions<CreateArticleMutation, CreateArticleMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginUserInput!) {
  login(loginUserInput: $input) {
    user {
      username
      avatar
    }
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: LoginUserInput!) {
  signup(loginUserInput: $input) {
    username
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;