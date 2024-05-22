import * as React from 'react';

import { BulletPage } from '@components/bulletPage/bulletPage';
import { PressRelease } from '@components/pressRelease';
import { StandardPage } from '@components/standardPage';
import { IArticle } from '@renderer/news.types';
import { PageProps } from '@renderer/types';

import styles from '../news.module.scss';

export const Page = ({ article }: { article: IArticle }) => {
  switch (article.type) {
    case 'press-release':
      return (
        <PressRelease
          className={styles.articles}
          content={article.content}
          title={article.title}
          date={article.date}
        />
      );

    case 'standard':
      return (
        <StandardPage
          className={styles.articles}
          content={article.content}
          title={article.title}
          date={article.date}
        />
      );

    case 'bullet':
      return (
        <BulletPage
          className={styles.articles}
          content={article.content}
          title={article.title}
          date={article.date}
        />
      );

    default:
      return (
        <>
          <div>{article.date}</div>
          <div>{article.title}</div>
          {article.content.map((item) => item)}
        </>
      );
  }
};

export const getDocumentProps = (pageProps: PageProps) => ({
  title: pageProps.article?.title,
  description: '',
});
