import * as React from 'react';

import _carouselData from '@assets/carousel/carousel.json';
import { ICarousel } from '@components/carousel/carousel.type';

import styles from './index.module.scss';

const carouselData: ICarousel = _carouselData;

export const Page: React.FC = () => (
  <div>
    <div className={styles.content}>About us</div>
  </div>
);

export const documentProps = {
  title: 'About us',
  description: 'About us',
  img: carouselData[0].file,
};
