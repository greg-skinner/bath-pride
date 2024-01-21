import * as React from 'react';

import _carouselData from '@assets/carousel/carousel.json';
import { Carousel } from '@components/carousel';
import { ICarousel } from '@components/carousel/carousel.type';

import styles from './index.module.scss';

const carouselData: ICarousel = _carouselData;

export const Page: React.FC = () => (
  <div>
    <Carousel />
    <div className={styles.content}>Bath Pride home page</div>
  </div>
);

export const documentProps = {
  description: 'The Bath Pride homepage',
  img: carouselData[0].file,
};
