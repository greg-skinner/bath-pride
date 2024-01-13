import * as React from 'react';

import { Link } from '@components/link/link';

import styles from './banner.module.scss';
import classNames from 'classnames';

export interface IBannerProps {
  alt: string;
  className?: string;
  copy?: string;
  dark?: boolean;
  file: string;
  headline: string;
  href: string;
}

export const Banner: React.FC<IBannerProps> = ({
  alt,
  className,
  copy,
  dark,
  file,
  headline,
  href,
}) => (
  <Link
    className={classNames(className, styles.banner, { [styles.dark]: dark })}
    href={href}
  >
    <img
      className={styles.image}
      src={`${APP_CONFIG.BASE_URL}${file}`}
      alt={alt}
    />
    <div className={styles.headline}>{headline}</div>
    <div className={styles.copy}>{copy}</div>
  </Link>
);
