import * as React from 'react';

import { BulletPage } from '@components/bulletPage/bulletPage';
import { StandardPage } from '@components/standardPage';
import { IArticle } from '@renderer/news.types';
import { PageProps } from '@renderer/types';
import { redirect } from 'vike/abort';

export const Page = ({ article }: { article: IArticle }) => {
  if (!article) {
    throw redirect('/news');
  }

  if (article.type === 'standard') {
    return (
      <StandardPage
        content={article.content}
        title={article.title}
        date={article.date}
      />
    );
  }

  if (article.type === 'bullet') {
    return (
      <BulletPage
        content={article.content}
        title={article.title}
        date={article.date}
      />
    );
  }

  return (
    <>
      <div>{article.date}</div>
      <div>{article.title}</div>
      {article.content.map((item) => item)}
    </>
  );
};

export const getDocumentProps = (pageProps: PageProps) => ({
  title: pageProps.article?.title,
  description: '',
});
