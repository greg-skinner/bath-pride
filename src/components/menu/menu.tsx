import * as React from 'react';

import { Link } from '@components/link/link';
import { PageContextState } from '@renderer/context';
import { IMenuLink, menuKeys, news, newsSlug } from '@utils';

import styles from './menu.module.scss';
import classNames from 'classnames';

export interface IMenuProps {
  className?: string;
  closeFunc?: () => void;
}

export const Menu = React.forwardRef<HTMLDivElement, IMenuProps>(
  ({ className, closeFunc, ...rest }, ref) => {
    const { pageProps, urlPathname } = React.useContext(PageContextState);
    console.log(urlPathname);

    const render = (link: IMenuLink) => {
      switch (link.url) {
        case 'news':
          return (
            <React.Fragment key={link.url}>
              <Link href={`${link.url}`}>{link.link}</Link>
              {pageProps?.article && (
                <ul>
                  {news.map((article) => (
                    <li key={article.date + article.title}>
                      <Link href={`news/${newsSlug(article)}`}>
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          );
        default:
          return (
            <div className={styles.container} key={link.url}>
              <Link href={`${link.url}`}>{link.link}</Link>
              {link.sub && (
                <div
                  className={classNames(styles.subLink, {
                    [styles.local]: link.local,
                  })}
                >
                  {link.sub.map((sub) => (
                    <Link
                      className={styles.child}
                      key={sub.url}
                      href={`${sub.url}`}
                    >
                      {sub.link}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
      }
    };
    console.log('menuKeys', menuKeys());

    return (
      <div ref={ref} className={classNames(className, styles.menu)} {...rest}>
        <div className={styles.button}>
          {closeFunc && <button onClick={closeFunc}>🞫</button>}
        </div>
        {menuKeys(urlPathname.split('/')[1]).map(render)}
      </div>
    );
  }
);

Menu.displayName = 'Menu';
