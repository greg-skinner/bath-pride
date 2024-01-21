import * as React from 'react';

import { Socials } from '@components/socials';

import styles from './footer.module.scss';
import classNames from 'classnames';

export interface IFooterProps {
  className?: string;
  msg: string;
}

export const Footer: React.FC<IFooterProps> = ({ className }) => (
  <div className={classNames(className, styles.footer)}>
    <div className={styles.msg}>
      <div>Bath Pride</div>
      <div>Charity number: xxxx</div>
      <div>©2024</div>
      <div className={styles.hash}>{APP_CONFIG.GIT_HASH}</div>
    </div>
    <Socials landscape className={styles.socials} />
  </div>
);
