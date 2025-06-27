import * as React from 'react';

import { BulletPage } from '@components/bulletPage/bulletPage';

import _content from './media.json';

import styles from './index.module.scss';
import { NewsTitle } from '@components/newsTitle';
import { news, newsSlug } from '@utils';
import { format } from 'date-fns';
import { Link } from '@components/link/link';

const content: string[] = _content;

export const Page: React.FC = () => (
  <div>
    <NewsTitle title={'Press and Media'} />
    <div>
      The current Bath Pride charity was formed to fill a gap in the LGBTQ+
      community in the City of Bath. The trustees and organising committee have
      a variety of event and other experiences, from a wide range of ages,
      orientations, nationalities and gender identities. We aim to be inclusive
      in all that we do, and to bring joy and advocacy to the LGBTQ+ community
      in Bath.
    </div>
    <h3>Press releases</h3>
    {news
      .filter((item) => item.type === 'press-release')
      .map((article) => (
        <Link
          key={article.title}
          href={`news/${newsSlug(article)}`}
          aria={article.title}
        >
          <h4>
            {format(article.date, 'dd MMM yyyy')}: {article.title}
          </h4>
        </Link>
      ))}
    <BulletPage
      className={styles.team}
      content={content}
      date={''}
      title={''}
      folder="images"
    />
  </div>
);

export const documentProps = {
  title: 'Press and Media',
  description: 'Press and Media kit for Bath Pride.',
  img: 'images/2024/holburne.jpg',
};
