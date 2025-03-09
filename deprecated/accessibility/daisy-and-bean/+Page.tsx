import * as React from 'react';

import { StandardPage } from '@components/standardPage';

import _content from './d-b-access.json';

import styles from './index.module.scss';

const content: string[] = _content;

export const Page: React.FC = () => (
  <StandardPage
    className={styles.content}
    content={content}
    date={''}
    title={'Accessibility Doc Daisy & Bean'}
    folder="images"
  />
);

export const documentProps = {
  title: 'Daisy and Bean accessibility',
  description: 'Accessibility for Daisy and Bean',
  hidden: true,
};
