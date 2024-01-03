import * as React from 'react';

import styles from './index.module.scss';

export const Page: React.FC = () => {
  console.log('index');

  return <div className={styles.content}>Bath Pride home page</div>;
};


export const documentProps = {
  title: '',
  description: '',
};
