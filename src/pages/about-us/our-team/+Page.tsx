import * as React from 'react';

import _carouselData from '@assets/carousel/carousel.json';
import { BulletPage } from '@components/bulletPage/bulletPage';
import { ICarousel } from '@components/carousel/carousel.type';

import _content from './ourTeam.json';

import styles from './index.module.scss';

const content: string[] = _content;

const carouselData: ICarousel = _carouselData;

export const Page: React.FC = () => (
  <div>
    <BulletPage
      className={styles.team}
      content={content}
      date={''}
      title={'Our Team'}
      folder="images"
    />
  </div>
);

export const documentProps = {
  description: 'Our Team',
  img: carouselData[0].file,
};
