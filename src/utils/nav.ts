import { IArticle } from '@renderer/news.types';
import { IMetaData, Page } from '@renderer/types';
import { addDays, isBefore } from 'date-fns';

const contentImport: Record<string, { Page: Page; documentProps: IMetaData }> =
  import.meta.glob('../pages/**/+Page.tsx', {
    eager: true,
  });

export interface IMenuLink {
  link: string;
  url: string;
  sub?: IMenuLink[];
  local?: boolean;
}

const makeMenuLink = (url: string): IMenuLink => ({
  link: contentImport[`../pages/${url}/+Page.tsx`].documentProps.title!,
  url: url === 'index' ? '/' : url,
});

const newsImport: Record<string, { default: IArticle }> = import.meta.glob(
  '../content/news/*',
  {
    eager: true,
  }
);

export const news = Object.values(newsImport)
  .map((item) => item.default)
  .filter((item) => isBefore(item.date, addDays(new Date(), 1)))
  .sort((a, b) => b.date.localeCompare(a.date));

export const newsSlug = (article: IArticle) => article.date;

export const newsHeaderImage = (article: IArticle) => article.content.filter(art => art[0] === '@')[0];

const sortOrder = [
  'bath-pride-2024',
  'news',
  'our-partners',
  'about-us',
  'Family Picnic',
  'Pride March',
  'WIG!',
  'Other Pride events',
  'Support Us',
  'Our Team',
  'Our Values',
  'Governance',
  'Press and Media',
];
const menuSort = (a: string, b: string) => {
  const initial =
    sortOrder.indexOf(a.match(/^([^/]*)/)![0]) -
    sortOrder.indexOf(b.match(/^([^/]*)/)![0]);

  if (initial === 0) {
    if (sortOrder.indexOf(a) > -1) {
      return -1;
    }
    if (sortOrder.indexOf(b) > -1) {
      return 1;
    }

    return a.localeCompare(b);
  }

  return initial;
};

export const menuKeys = (local?: string): IMenuLink[] => {
  const links: IMenuLink[] = [];

  Object.keys(contentImport)
    .filter((key) => !contentImport[key].documentProps?.hidden)
    .map((file) => file.slice(9, -10))
    .filter((key) => key.search('@') < 0)
    .filter((key) => key.search('_') < 0)
    .filter((key) => key.search('qr-code') < 0)
    .sort((a, b) =>
      // eslint-disable-next-line no-nested-ternary -- sort logic
      a === '/' ? -1 : b === '/' ? 1 : menuSort(a, b)
    )
    .forEach((page) => {
      if (page.indexOf('/') <= 1) {
        const link = makeMenuLink(page);
        links.push(link);
        if (local && page.indexOf(local) > -1) {
          link.local = true;
        }
      } else {
        const urlParts = page.split('/');
        const parent = links.filter((link) => link.url === urlParts[0])[0];
        if (!parent.sub) {
          parent.sub = [];
        }
        parent.sub.push(makeMenuLink(page));
      }
    });

  links.forEach((link) => {
    if (link.sub) {
      link.sub.sort((a, b) => menuSort(a.link, b.link));
    }
  });

  return links;
};
