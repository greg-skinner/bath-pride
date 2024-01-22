import * as React from 'react';

import { Link } from '@components/link/link';
import { PageProps } from '@renderer/types';
import { news, newsSlug, pageMap } from '@utils';

import styles from './menu.module.scss';
import classNames from 'classnames';

export interface IMenuProps {
  className?: string;
  closeFunc?: () => void;
  pageProps?: PageProps;
}

export const Menu = React.forwardRef<HTMLDivElement, IMenuProps>(
  ({ className, closeFunc, pageProps, ...rest }, ref) => {
    const render = (key: string) => {
      switch (key) {
        case 'News':
          return (
            <React.Fragment key={pageMap[key]}>
              <Link href={`${pageMap[key]}`}>{key}</Link>
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
            <React.Fragment key={pageMap[key]}>
              <Link href={`${pageMap[key]}`}>{key}</Link>
            </React.Fragment>
          );
      }
    };
    console.log(pageMap);
    return (
      <div ref={ref} className={classNames(className, styles.menu)} {...rest}>
        <div className={styles.button}>
          {closeFunc && <button onClick={closeFunc}>🞫</button>}
        </div>
        {Object.keys(pageMap)
          .filter((key) => key.search('@') < 0)
          .filter((key) => key.search('_') < 0)
          .sort((a, b) =>
            // eslint-disable-next-line no-nested-ternary -- sort logic
            a === 'Home' ? -1 : b === 'Home' ? 1 : a.localeCompare(b)
          )
          .map(render)}
      </div>
    );
  }
);

Menu.displayName = 'Menu';
