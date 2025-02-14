import * as React from 'react';

import { Image } from '@components/image';

import styles from './index.module.scss';

export const Page: React.FC = () => (
  <div className={styles.page}>
    <div className={styles.title}>Bath Pride 2024</div>
    <div className={styles.copy}>
      What a day! Three times as many people as we expected arrived on the day
      to the picnic and the march, and we were blown away by the support
      everyone showed to this first event.
    </div>
    <Image
      className={styles.image}
      folder={'images/2024'}
      file={'holburne.jpg'}
      caption={'Credit: Mitch Williams'}
      alt={'The crowd outside the Holburne museum with various pride flags'}
    />
    <div className={styles.copy}>
      We were so pleased to see so many people join us to march through the city
      - far beyond our expectations, and just barely within our capacity! A
      massive thank you to all of the volunteer marshals who helped keep
      everyone safe, and thank yous to all the groups who came together to
      represent their communities, as well as everyone who joined as
      individuals. Particular thanks to the Ambulance service, who&apos;s
      ambulance brought up the rear of the march in style.
    </div>
    <Image
      className={styles.image}
      folder={'images/2024'}
      file={'march.png'}
      caption={'Credit: Ben Herring'}
      alt={'A view of the march as it headed back up Great Pultney Street'}
    />
    <div className={styles.copy}>
      Thank you so much to everyone who attended the picnic - stallholders and
      musicians, families, individuals, groups of friends and colleagues, we
      were so pleased to see all of you out to celebrate with us. Special thanks
      also to the Holburne Museum, who gave us so much support and let us use
      their space, and Bath Business Improvement District who lent us equipment
      that let us run the event smoothly.
    </div>
    <Image
      className={styles.image}
      folder={'images/2024'}
      file={'picnic.jpg'}
      caption={'Credit: Greg Skinner'}
      alt={
        'A view of the back of the Holburne Museum showing some of the picnic attendees and stalls'
      }
    />
  </div>
);

export const documentProps = {
  title: 'Bath Pride 2024',
  description:
    'What a day! Three times as many people as we expected arrived on the day to the picnic and the march, and we were blown away by the support everyone showed to this first event.',
  img: 'images/2024/holburne.jpg',
};
