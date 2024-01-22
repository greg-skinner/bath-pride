import { IArticle } from '@renderer/news.types';
import { Page } from '@renderer/types';

import { fileToLink, fileToUrl } from './urls';

const newsImport: Record<string, { default: IArticle }> = import.meta.glob(
  '../content/news/*',
  {
    eager: true,
  }
);

export const news = Object.values(newsImport)
  .map((item) => item.default)
  .sort((a, b) => b.date.localeCompare(a.date));

export const newsSlug = (article: IArticle) =>
  `${article.date}-${article.title
    .replace(/[^ a-zA-Z]/g, '')
    .replace(/ /g, '-')
    .slice(0, 28)}`;

const contentImport: Record<string, { Page: Page }> = import.meta.glob(
  '../pages/**/+Page.tsx',
  {
    eager: true,
  }
);

export const pageMap = (() => {
  const map: { [key: string]: string } = {};
  Object.keys(contentImport).forEach((key) => {
    map[fileToLink(key)] = fileToUrl(key);
  });

  return map;
})();
