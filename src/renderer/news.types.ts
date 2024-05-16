export type Slice = string;

export interface IArticle {
  date: string;
  title: string;
  type: 'standard' | 'bullet' | 'press-release';
  content: Slice[];
}
