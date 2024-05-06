import * as React from 'react';

import { Link } from '@components/link/link';
import { news, newsSlug } from '@utils';
import { format } from 'date-fns';

import styles from './news.module.scss';

export const Page: React.FC = () => (
  <div className={styles.articles}>
    <h1>News</h1>
    <ul>
      {news.map(
        (article) =>
          new Date(article.date).getTime() < new Date().getTime() && (
            <li key={newsSlug(article)}>
              <Link href={`news/${newsSlug(article)}`}>
                {format(article.date, 'do MMMM y')} - {article.title}
              </Link>
            </li>
          )
      )}
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
        title: 'News',
        pageProps: {
          article,
        },
      },
    };
  });
