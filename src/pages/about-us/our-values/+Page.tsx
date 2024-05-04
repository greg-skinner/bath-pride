import * as React from 'react';

import _carouselData from '@assets/carousel/carousel.json';
import { BulletPage } from '@components/bulletPage/bulletPage';
import { ICarousel } from '@components/carousel/carousel.type';

import _content from './values.json';

import styles from './index.module.scss';

const content: string[] = _content;

const carouselData: ICarousel = _carouselData;

export const Page: React.FC = () => (
  <div>
    <BulletPage
      className={styles.values}
      content={content}
      date={''}
      title={'Our Values'}
      folder="images"
    />
  </div>
);

export const documentProps = {
  title: 'Our values',
  description:
    'Our values underpin everything we do. They shape our approach to our events, activities, and decision making, as well as the behaviours of everyone involved at Bath Pride.',
  img: carouselData[0].file,
};
