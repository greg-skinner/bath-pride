import * as React from 'react';

import { BulletPage } from '@components/bulletPage/bulletPage';

import _content from './supportUs.json';

import styles from './index.module.scss';

const content: string[] = _content;

export const Page: React.FC = () => (
  <div>
    <BulletPage
      className={styles.support}
      content={content}
      date={''}
      title={'Support Us'}
      folder="images"
    />
  </div>
);

export const documentProps = {
  title: 'Support us',
  description:
    'Bath Pride can only operate with the support from our local community. If you are able to, we would appreciate your time or money to help us make Bath a more inclusive and welcoming city for the LGBT+ community.',
  img: 'images/2024/holburne.jpg',
};
