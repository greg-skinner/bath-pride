import * as React from 'react';

import { PartnerBubble } from '@components/partnerBubble';
import { news, newsHeaderImage, newsSlug } from '@utils';

import styles from './news.module.scss';

export const Page: React.FC = () => (
  <div className={styles.articles}>
    <h1>News</h1>
    <div className={styles.news}>
      {news.map((article, idx) => (
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
