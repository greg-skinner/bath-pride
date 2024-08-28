import * as React from 'react';

import { BulletPage } from '@components/bulletPage/bulletPage';

import _content from './ourTeam.json';

import styles from './index.module.scss';

const content: string[] = _content;

export const Page: React.FC = () => (
  <div>
    <BulletPage
      className={styles.team}
      content={content}
      date={''}
      title={'Our Team'}
      folder="images"
    />
  </div>
);

export const documentProps = {
  title: 'Our Team',
  description: 'Our team of volunteers, working hard to deliver Bath Pride.',
  img: 'images/2024/holburne.jpg',
};
