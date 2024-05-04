import * as React from 'react';

import styles from './index.module.scss';

export const Page: React.FC = () => (
  <div>
    <div className={styles.content}>Events page</div>
  </div>
);

export const documentProps = {
  title: 'Events',
  description: 'Events',
};
