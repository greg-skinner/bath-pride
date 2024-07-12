import * as React from 'react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import _carouselData from '@assets/march-carousel/march-carousel.json';
import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ICarousel } from '../carousel.type';
import { MarchCarouselPage } from './marchCarouselPage';

import styles from './marchCarousel.module.scss';
import classNames from 'classnames';

const carouselData: ICarousel = _carouselData;

export interface IMarchCarouselProps {
  className?: string;
}

SwiperCore.use([Autoplay, Navigation, Pagination]);

export const MarchCarousel: React.FC<IMarchCarouselProps> = ({ className }) => (
  <div className={classNames(className, styles.carousel)}>
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      loop
      speed={800}
    >
      {carouselData.map((item, idx) => (
        <SwiperSlide key={item.file}>
          <MarchCarouselPage {...item} index={idx} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
