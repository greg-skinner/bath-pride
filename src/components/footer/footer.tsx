import * as React from 'react';

import { Socials } from '@components/socials';

import styles from './footer.module.scss';
import classNames from 'classnames';
import { Link } from '@components/link/link';

export interface IFooterProps {
  className?: string;
  msg: string;
}

export const Footer: React.FC<IFooterProps> = ({ className }) => (
  <div className={classNames(className, styles.footer)}>
    <div className={styles.spacer} />
    <div className={styles.msg}>
      <strong>Bath Pride</strong>
      <div>
        <Link href="about-us/media" aria="Our press kit">
          Press kit
        </Link>
        {' ⬩ '}
        <Link aria="Our governance details" href="about-us/governance">
          Governance
        </Link>
        {' ⬩ '}
        <Link aria="Acknowledgements" href="about-us/acknowledgements">
          Acknowledgements
        </Link>
        {' ⬩ '}
        <Link aria="Send us an email" href="mailto:hello@bathpride.org">
          Contact
        </Link>
      </div>
      <div className={styles.smaller}>Registed charity number 1206748</div>
      <div className={styles.smaller}>©2025 {APP_CONFIG.GIT_HASH}</div>
    </div>
    <Socials landscape className={styles.socials} />
  </div>
);
