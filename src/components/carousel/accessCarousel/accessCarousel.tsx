import * as React from 'react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import _carouselData from '@assets/access-carousel/access-carousel.json';
import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ICarousel } from '../carousel.type';
import { AccessCarouselPage } from './accessCarouselPage';

import styles from './accessCarousel.module.scss';
import classNames from 'classnames';

const carouselData: ICarousel = _carouselData;

export interface IAccessCarouselProps {
  className?: string;
}

SwiperCore.use([Autoplay, Navigation, Pagination]);

export const AccessCarousel: React.FC<IAccessCarouselProps> = ({
  className,
}) => (
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
          <AccessCarouselPage {...item} index={idx} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
