import * as React from 'react';

import _carouselData from '@assets/carousel/carousel.json';
import { ICarousel } from '@components/carousel/carousel.type';

import styles from './index.module.scss';

const carouselData: ICarousel = _carouselData;

export const Page: React.FC = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.headline}>Bath Pride is finally here!</div>
      <div className={styles.text}>
        Bath Pride is finally coming to Bath as its own distinct event. With the
        local community we are trying to build a pride that is long-lasting and
        represents the entire queer community. Together, with you, we are going
        to make a pride we can all be proud of.
      </div>
      <div className={styles.hashtag}>#BathPride</div>
    </div>
  </div>
);

export const documentProps = {
  description:
    'Bath Pride is finally coming to Bath as its own distinct event. Together, with you, we are going to make a pride we can all be proud of',
  img: carouselData[0].file,
};
