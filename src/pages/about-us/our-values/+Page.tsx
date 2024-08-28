import * as React from 'react';

import { BulletPage } from '@components/bulletPage/bulletPage';

import _content from './values.json';

import styles from './index.module.scss';

const content: string[] = _content;

export const Page: React.FC = () => (
  <div>
    <BulletPage
      className={styles.values}
      content={content}
      date={''}
      title={'Our Values'}
      folder="values"
    />
  </div>
);

export const documentProps = {
  title: 'Our Values',
  description:
    'Our values underpin everything we do. They shape our approach to our events, activities, and decision making, as well as the behaviours of everyone involved at Bath Pride.',
  img: 'images/2024/holburne.jpg',
};
