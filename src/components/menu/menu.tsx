import * as React from 'react';

import { Link } from '@components/link/link';
import { PageProps } from '@renderer/types';
import { blogs, blogSlug, pageMap } from '@utils';

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
        case 'Blog':
          return (
            <React.Fragment key={pageMap[key]}>
              <Link href={`${pageMap[key]}`}>{key}</Link>
              {pageProps?.blog && (
                <ul>
                  {blogs.map((blog) => (
                    <li key={blog.date + blog.title}>
                      <Link href={`blog/${blogSlug(blog)}`}>{blog.title}</Link>
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

    return (
      <div ref={ref} className={classNames(className, styles.menu)} {...rest}>
        <div className={styles.button}>
          {closeFunc && <button onClick={closeFunc}>🞫</button>}
        </div>
        {Object.keys(pageMap)
          .filter((key) => key.search('@') < 0)
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
