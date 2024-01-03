import * as React from 'react';

import styles from './index.module.scss';

export const Page: React.FC = () => (
  <div className={styles.content}>Bath Pride home page</div>
);

export const documentProps = {
  title: '',
  description: '',
};
