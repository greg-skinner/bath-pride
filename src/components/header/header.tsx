import * as React from 'react';

import { Menu } from '@components/menu';
import { PageProps } from '@renderer/types';

import styles from './header.module.scss';
import classNames from 'classnames';

export interface IHeaderProps {
  className?: string;
  icon?: string;
  title: string;
  pageProps?: PageProps;
}

export const Header: React.FC<IHeaderProps> = ({
  className,
  icon,
  title,
  pageProps,
}) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [slideMenu, setSlideMenu] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const menuTransitionEnd = () => {
    setShowMenu(false);
    menuRef.current?.removeEventListener('transitionend', menuTransitionEnd);
  };
  const hamburger = () => {
    if (!slideMenu) {
      setShowMenu(true);
      setTimeout(() => setSlideMenu(true), 0);
    } else {
      setSlideMenu(false);
      menuRef.current?.addEventListener('transitionend', menuTransitionEnd);
    }
  };

  return (
    <div className={classNames(className, styles.header)}>
      {icon && (
        <img className={styles.icon} src={`${APP_CONFIG.BASE_URL}${icon}`} />
      )}
      <div className={styles.title}>{title}</div>
      <div className={styles.options}>
        <div>Events</div>
        <div>Other</div>
      </div>
      <button onClick={hamburger} className={styles.hamburger}>
        {'\u276E'}
      </button>
      <div data-show={showMenu ? 'true' : 'false'} className={styles.container}>
        <div className={styles.dismiss} onClick={hamburger} />
        <Menu
          data-slide={slideMenu ? 'true' : 'false'}
          className={styles.menu}
          closeFunc={hamburger}
          ref={menuRef}
          pageProps={pageProps}
        />
      </div>
    </div>
  );
};
