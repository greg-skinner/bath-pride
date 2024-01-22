import * as React from 'react';

import { Link } from '@components/link/link';
import { news, newsSlug } from '@utils';

export const Page: React.FC = () => (
  <div className={'hi'}>
    <h1>News!</h1>
    <ul>
      {news.map((article) => (
        <li key={newsSlug(article)}>
          <Link href={`news/${newsSlug(article)}`}>{newsSlug(article)}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export const documentProps = {
  title: 'News',
  description: '',
};

export const onBeforePrerenderStart = () =>
  news.map((article) => {
    const url = `/news/${newsSlug(article)}`;

    return {
      url,
      pageContext: {
        title: 'hi',
        pageProps: {
          news,
        },
      },
    };
  });
