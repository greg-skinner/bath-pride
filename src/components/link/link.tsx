import * as React from 'react';

import styles from './link.module.scss';
import classNames from 'classnames';

export interface ILinkProps {
  className?: string;
  menuLink?: boolean;
  tab?: boolean;
  href: string;
  aria: string;
}

export const Link: React.FC<React.PropsWithChildren<ILinkProps>> = ({
  className,
  menuLink,
  href,
  children,
  aria,
  tab,
}) => (
  <a
    aria-label={aria}
    className={classNames(className, { [styles.link]: !menuLink })}
    href={
      href.indexOf('http') < 0 && href.indexOf('mailto') < 0
        ? `${APP_CONFIG.BASE_URL}${href === '/' ? '' : href}`
        : href
    }
    target={tab ? '_blank' : ''}
    rel={tab ? 'noreferrer' : ''}
  >
    {children}
  </a>
);
