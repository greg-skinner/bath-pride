import * as React from 'react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import _carouselData from '@assets/carousel/carousel.json';
import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ICarousel } from './carousel.type';
import { CarouselPage } from './carouselPage';

import styles from './carousel.module.scss';
import classNames from 'classnames';

const carouselData: ICarousel = _carouselData;

export interface ICarouselProps {
  className?: string;
}

SwiperCore.use([Autoplay, Navigation, Pagination]);

export const Carousel: React.FC<ICarouselProps> = ({ className }) => (
  <div className={classNames(className, styles.carousel)}>
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1}
      autoplay={{ delay: 4500 }}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      loop
      speed={800}
    >
      {carouselData.map((item, idx) => (
        <SwiperSlide key={item.file}>
          <CarouselPage {...item} index={idx} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
