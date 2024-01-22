export type Slice = string;

export interface IArticle {
  date: string;
  title: string;
  type: 'standard';
  content: Slice[];
}
