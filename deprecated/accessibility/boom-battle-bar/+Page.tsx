import * as React from 'react';

import { StandardPage } from '@components/standardPage';

import _content from './b-b-b-access.json';

import styles from './index.module.scss';

const content: string[] = _content;

export const Page: React.FC = () => (
  <StandardPage
    className={styles.content}
    content={content}
    date={''}
    title={'Boom Battle Bar Accessibility Statement'}
    folder="images"
  />
);

export const documentProps = {
  title: 'Boom Battle Bar accessibility',
  description: 'Accessibility for Boom Battle Bar',
  hidden: true,
};
