import * as React from 'react';

import styles from './socials.module.scss';
import classNames from 'classnames';

export interface ISocialsProps {
  className?: string;
  landscape?: boolean;
}

export const Socials: React.FC<ISocialsProps> = ({ className, landscape }) => (
  <div
    className={classNames(className, styles.socials, {
      [styles.landscape]: landscape,
    })}
  >
    <a
      aria-label="Bath Pride Instagram"
      className={classNames(styles.link, styles.instagram)}
      target="_blank"
      rel="noreferrer"
      href="https://www.instagram.com/bath.pride/"
    />
    {/* <a
      aria-label="Bath Pride Facebook"
      className={classNames(styles.link, styles.facebook)}
      target="_blank"
      rel="noreferrer"
      href="https://www.facebook.com/BathPride"
    /> */}
    {/* <a
      aria-label="Bath Pride X"
      className={classNames(styles.link, styles.twitter)}
      target="_blank"
      rel="noreferrer"
      href="https://www.x.com"
    /> */}
  </div>
);
