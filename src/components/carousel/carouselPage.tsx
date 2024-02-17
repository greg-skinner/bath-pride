import * as React from 'react';

import { ICarouselItem } from './carousel.type';

import styles from './carousel.module.scss';
import classNames from 'classnames';

export interface ICarouselPageProps extends ICarouselItem {
  index: number;
}

export const CarouselPage: React.FC<ICarouselPageProps> = ({
  alt,
  description,
  index,
  file,
  title,
}) => (
  <div
    className={classNames(styles.carouselPage, {
      [styles.content]: description,
    })}
    data-index={index}
  >
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
  </div>
);
