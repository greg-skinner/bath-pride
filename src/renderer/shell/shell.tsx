import * as React from 'react';

import 'normalize.css';

import { Footer } from '@components/footer/footer';
import { Header } from '@components/header';

import styles from './shell.module.scss';

export const Shell: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className={styles.shell}>
    <Header
      className={styles.header}
      icon={'images/bath-pride-logo_transparent.png'}
      href="/"
      aria="Bath Pride homepage"
    />
    <div className={styles.page}>{children}</div>
    <Footer className={styles.footer} msg={'footer'} />
  </div>
);
