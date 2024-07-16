import * as React from 'react';

import { BulletPage } from '@components/bulletPage/bulletPage';

import _content from './media.json';

import styles from './index.module.scss';

const content: string[] = _content;

export const Page: React.FC = () => (
  <div>
    <BulletPage
      className={styles.team}
      content={content}
      date={''}
      title={'Press and Media'}
      folder="images"
    />
  </div>
);

export const documentProps = {
  title: 'Press and Media',
  description: 'Press and Media kit for Bath Pride.',
  img: 'carousel/stay-tuned.jpg',
};
