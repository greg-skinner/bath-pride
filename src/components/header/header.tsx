import * as React from 'react';

import { Link } from '@components/link/link';
import { Menu } from '@components/menu';

import styles from './header.module.scss';
import classNames from 'classnames';

export interface IHeaderProps {
  className?: string;
  icon?: string;
  href?: string;
  aria: string;
}

export const Header: React.FC<IHeaderProps> = ({
  className,
  icon,
  href,
  aria,
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
      {icon && href ? (
        <Link href={href} aria={aria}>
          <img className={styles.icon} src={`${APP_CONFIG.BASE_URL}${icon}`} />
        </Link>
      ) : (
        <img className={styles.icon} src={`${APP_CONFIG.BASE_URL}${icon}`} />
      )}
      <Menu className={styles.options} />
      <button onClick={hamburger} className={styles.hamburger}>
        ︙
      </button>
      <div data-show={showMenu ? 'true' : 'false'} className={styles.container}>
        <div className={styles.dismiss} onClick={hamburger} />
        <Menu
          data-slide={slideMenu ? 'true' : 'false'}
          className={styles.menu}
          closeFunc={hamburger}
          ref={menuRef}
        />
      </div>
    </div>
  );
};
