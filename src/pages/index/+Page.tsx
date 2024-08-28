import * as React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

import { Carousel } from '@components/carousel';

import styles from './index.module.scss';

export const Page: React.FC = () => (
  <div>
    <div className={styles.content}>
      <Carousel />
      <div className={styles.headline}>We did it!</div>
      <div className={styles.text}>
        We can't believe the outpouring of support you all brought to Bath Pride
        2024! We're taking some time to recuperate, but will be back soon to
        build a pride that is long-lasting and represents the entire queer
        community. Together, with you, we are going to make a pride we can all
        be proud of.
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
  img: 'carousel/stay-tuned.jpg',
};
