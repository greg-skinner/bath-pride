import * as React from 'react';

import { Link } from '@components/link/link';

import { ICarouselItem } from '../carousel.type';

import styles from './marchCarousel.module.scss';
import classNames from 'classnames';

export interface ICarouselPageProps extends ICarouselItem {
  index: number;
}

export const MarchCarouselPage: React.FC<ICarouselPageProps> = ({
  action,
  alt,
  description,
  index,
  file,
  title,
}) => {
  const content = (
    <>
      <div className={styles.imageContainer}>
        <img src={`${APP_CONFIG.BASE_URL}${file}`} alt={alt} />
        {title && (
          <div className={classNames(styles.header)}>
            <span>{title.split(' ')[0]} </span>
            {title.split(' ').slice(1).join(' ')}
          </div>
        )}
      </div>
      {description && (
        <div className={classNames(styles.description)}>{description}</div>
      )}
    </>
  );

  if (action) {
    return (
      <Link
        className={classNames(styles.carouselPage, {
          [styles.content]: description,
        })}
        data-index={index % 9}
        href={action}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={classNames(styles.carouselPage, {
        [styles.content]: description,
      })}
      data-index={index % 9}
    >
      {content}
    </div>
  );
};