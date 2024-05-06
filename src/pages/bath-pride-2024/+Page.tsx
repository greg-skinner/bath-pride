import * as React from 'react';

import { EventTitle } from '@components/eventTitle';

import styles from './index.module.scss';

export const Page: React.FC = () => (
  <div>
    <div className={styles.title}>Bath Pride 2024</div>
    <div className={styles.copy}>
      We are excited to bring you Bath’s first ever pride event! Join us for a
      family picnic, a protest march, and the official after party at WIG!{' '}
    </div>
    <div className={styles.events}>
      <EventTitle
        img={
          '@The_Holburne_Museum.jpg::A picture of the front facade of the Holburne Museum'
        }
        className={styles.event}
        title={'Family Picnic'}
        date={new Date('2024-08-18')}
        time={[new Date('2024-08-18T12:00'), new Date('2024-08-18T17:00')]}
        location={'Holburne Museum'}
        description={
          'A chance to sit, relax and listen to some live local music.'
        }
        link="bath-pride-2024/family-picnic"
      />
      <EventTitle
        img={
          '@Pride-March.jpg::A group of protesters holding LGBT+ related signs in Bath'
        }
        className={styles.event}
        title={'Pride March'}
        date={new Date('2024-08-18')}
        time={[new Date('2024-08-18T13:00'), new Date('2024-08-18T14:00')]}
        location={'location to be confirmed'}
        description={'Pride March through the city, pride is a protest!'}
        link="bath-pride-2024/pride-march"
      />
      <EventTitle
        img={"@WIG.jpg::WIG!'s logo"}
        className={styles.event}
        title={'WIG!'}
        date={new Date('2024-08-18')}
        time={[new Date('2024-08-18T18:00'), 'Late']}
        location={'Komedia'}
        description={
          'The Official Bath Pride 2024 after party - WIG! Midsummer Night’s Dream'
        }
        link="bath-pride-2024/wig"
      />
    </div>
  </div>
);

export const documentProps = {
  title: 'Bath Pride 2024',
  description: 'Events',
};
