import * as React from 'react';

import { StandardPage } from '@components/standardPage';

import _content from './b-b-b-access.json';

import styles from './index.module.scss';

const content: string[] = _content;

export const Page: React.FC = () => (
  <div className={styles.page}>
    <StandardPage
      className={styles.content}
      content={content}
      date={''}
      title={'Boom Battle Bar Accessibility Statement'}
      folder="images"
    />
  </div>
);

export const documentProps = {
  title: 'Boom Battle Bar accessibility',
  description: 'Accessibility for Boom Battle Bar',
  hidden: true,
};
