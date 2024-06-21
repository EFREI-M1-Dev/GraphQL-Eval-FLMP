export class ArticleFilterInput {
  readonly title!: string;
  readonly authorId!: number;
  readonly createdAfter!: Date;
  readonly createdBefore!: Date;
}
