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
};

export type Article = {
  __typename?: 'Article';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  likes?: Maybe<Array<Like>>;
  title?: Maybe<Scalars['String']['output']>;
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


export type QueryLikeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  username: Scalars['String']['input'];
};

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
  id: Scalars['Int']['output'];
  likes?: Maybe<Array<Like>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type PostArticleMutationVariables = Exact<{
  formValues: CreateArticleInput;
}>;


export type PostArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'Article', id: number, title?: string | null, content?: string | null } };

export type GetArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', title?: string | null, content?: string | null } | null> };


export const PostArticleDocument = gql`
    mutation postArticle($formValues: CreateArticleInput!) {
  createArticle(createArticleInput: $formValues) {
    id
    title
    content
  }
}
    `;
export type PostArticleMutationFn = Apollo.MutationFunction<PostArticleMutation, PostArticleMutationVariables>;

/**
 * __usePostArticleMutation__
 *
 * To run a mutation, you first call `usePostArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postArticleMutation, { data, loading, error }] = usePostArticleMutation({
 *   variables: {
 *      formValues: // value for 'formValues'
 *   },
 * });
 */
export function usePostArticleMutation(baseOptions?: Apollo.MutationHookOptions<PostArticleMutation, PostArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostArticleMutation, PostArticleMutationVariables>(PostArticleDocument, options);
      }
export type PostArticleMutationHookResult = ReturnType<typeof usePostArticleMutation>;
export type PostArticleMutationResult = Apollo.MutationResult<PostArticleMutation>;
export type PostArticleMutationOptions = Apollo.BaseMutationOptions<PostArticleMutation, PostArticleMutationVariables>;
export const GetArticlesDocument = gql`
    query GetArticles {
  articles {
    title
    content
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
 *   },
 * });
 */
export function useGetArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables>) {
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