import * as React from 'react';

import { Link } from '@components/link/link';
import { Socials } from '@components/socials';
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
    const { urlPathname } = React.useContext(PageContextState);

    const render = (link: IMenuLink) => {
      switch (link.url) {
        case 'news':
          return (
            <div className={styles.container} key={link.url}>
              <Link aria={link.link} menuLink href={`${link.url}`}>
                {link.link}
              </Link>
              <div
                className={classNames(styles.subLink, styles.news, {
                  [styles.local]: link.local,
                })}
              >
                {news
                  .filter((item) => item.type !== 'press-release')
                  .filter((item) => !item.archived)
                  .map((article) => (
                    <Link
                      aria={article.title}
                      menuLink
                      className={styles.child}
                      key={newsSlug(article)}
                      href={`news/${newsSlug(article)}`}
                    >
                      {article.title}
                    </Link>
                  ))}
              </div>
            </div>
          );
        default:
          return (
            <div className={styles.container} key={link.url}>
              <Link aria={link.link} menuLink href={`${link.url}`}>
                {link.link}
              </Link>
              {link.sub && (
                <div
                  className={classNames(styles.subLink, {
                    [styles.local]: link.local,
                  })}
                >
                  {link.sub.map((sub) => (
                    <Link
                      aria={sub.link}
                      menuLink
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

    return (
      <div ref={ref} className={classNames(className, styles.menu)} {...rest}>
        <div className={styles.button}>
          {closeFunc && <button onClick={closeFunc}>🞫</button>}
        </div>
        {menuKeys(urlPathname.split('/')[1]).map(render)}
        <div className={styles.spacer} />
        <div className={styles.outbound}>
          <Socials className={styles.socials} landscape />
          <div className={styles.donate}>
            <em>Donate</em>
            <Link
              className={styles.link}
              href={'https://www.paypal.com/gb/fundraiser/charity/5069290'}
              aria={'Our PayPal donation link'}
            >
              PayPal
            </Link>
            <Link
              className={styles.link}
              href={'https://pay.sumup.com/b2c/QC5QJJED'}
              aria={'Our SumUp donation link'}
            >
              SumUp
            </Link>
            <Link
              className={styles.link}
              href={'https://www.giveasyoulive.com/charity/bath-pride'}
              aria={'Our Give As You Live donation link'}
            >
              Give As You Live
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

Menu.displayName = 'Menu';
