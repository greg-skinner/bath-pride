import * as React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

import _carouselData from '@assets/carousel/carousel.json';
import { Carousel } from '@components/carousel';
import { ICarousel } from '@components/carousel/carousel.type';

import styles from './index.module.scss';

const carouselData: ICarousel = _carouselData;

export const Page: React.FC = () => (
  <div>
    <div className={styles.content}>
      <Carousel />
      <div className={styles.headline}>Bath Pride is finally here!</div>
      <div className={styles.text}>
        Bath Pride is finally coming to Bath as its own distinct event. With the
        local community we are trying to build a pride that is long-lasting and
        represents the entire queer community. Together, with you, we are going
        to make a pride we can all be proud of.
      </div>
      <div className={styles.hashtag}>#BathPride</div>
      <div className={styles.embed}>
        <InstagramEmbed
          url="https://www.instagram.com/bath.pride/"
          width={'100%'}
          debug
        />
      </div>
    </div>
  </div>
);

export const documentProps = {
  description:
    'Bath Pride is finally coming to Bath as its own distinct event. Together, with you, we are going to make a pride we can all be proud of.',
  img: carouselData[0].file,
};
