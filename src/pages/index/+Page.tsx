import * as React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

import { Carousel } from '@components/carousel';

import styles from './index.module.scss';
import { Link } from '@components/link/link';

export const Page: React.FC = () => (
  <div>
    <div className={styles.content}>
      <Carousel />
      <div className={styles.headline}>Bath Pride 2025 is coming!</div>
      <div className={styles.text}>
        After the amazing success of last year, we will be back this summer for{' '}
        <Link href="bath-pride-2025" aria="Bath Pride 2025 page">
          Bath Pride 2025
        </Link>
        !
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
    "We can't believe the outpouring of support you all brought to Bath Pride 2024!",
  img: 'images/2024/holburne.jpg',
};
