import * as React from 'react';

import { PartnerBubble } from '@components/partnerBubble';
import { news, newsHeaderImage, newsSlug } from '@utils';

import styles from './news.module.scss';
import { Link } from '@components/link/link';
import { format } from 'date-fns';

export const Page: React.FC = () => (
  <div className={styles.articles}>
    <h1>News</h1>
    <div className={styles.news}>
      {news
        .filter((item) => !item.archived)
        .map((article, idx) => (
          <PartnerBubble
            key={article.title}
            accent={idx}
            img={newsHeaderImage(article)}
            folder="news"
            title={`${article.title}`}
            link={`news/${newsSlug(article)}`}
            aria={article.title}
            className={styles.bubble}
          />
        ))}
    </div>
    <h2>Archived articles</h2>
    {news
      .filter((item) => item.archived)
      .map((article) => (
        <Link
          key={article.title}
          href={`news/${newsSlug(article)}`}
          aria={article.title}
        >
          <h3>
            {format(article.date, 'dd MMM yyyy')}: {article.title}
          </h3>
        </Link>
      ))}
  </div>
);

export const documentProps = {
  title: 'News',
  description: 'News and updates from Bath Pride.',
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
