export interface ICarouselItem {
  alt: string;
  description?: string;
  file: string;
  title?: string;
  action?: string;
  aria: string;
}

export type ICarousel = ICarouselItem[];
