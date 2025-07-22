import * as React from 'react';

import { StandardPage } from '@components/standardPage';

import _content from './access.json';

import styles from './index.module.scss';

const content: string[] = _content;

export const Page: React.FC = () => (
  <div className={styles.page}>
    <StandardPage folder={'images'} content={content} date={''} title={''} />
  </div>
);

export const documentProps = {
  title: '2025 Pride Access',
  description: 'Access information for Bath Pride 2025',
};
