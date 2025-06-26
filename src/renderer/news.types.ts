export type Slice = string;

export interface IArticle {
  date: string;
  title: string;
  archived: boolean;
  type: 'standard' | 'bullet' | 'press-release';
  content: Slice[];
}
