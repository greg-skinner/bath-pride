import * as React from 'react';

import { EventTitle } from '@components/eventTitle';

import styles from './index.module.scss';

export const Page: React.FC = () => (
  <div className={styles.page}>
    <div className={styles.title}>Bath Pride 2024</div>
    <div className={styles.copy}>
      We are excited to bring you Bath’s first ever pride event! Join us for a
      family picnic, a protest march, and the official after party at WIG! Make
      sure you have the date in your calendar!
    </div>
    <div className={styles.events}>
      <EventTitle
        img={
          '@The_Holburne_Museum.jpg::The front facade of the Holburne Museum'
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
        aria="Bath Pride family picnic"
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
        aria="Bath Pride march"
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
        aria="Bath Pride evening event - WIG"
      />
      <EventTitle
        img={"@bath-pride-logo_stone.png::Bath Pride's logo"}
        className={styles.event}
        title={'Other Pride events'}
        label={'Various dates'}
        description={
          "There's lots of other events across the city affiliate with Bath Pride - here's a selection"
        }
        link="bath-pride-2024/other-events"
        aria="Other Bath Pride events"
      />
    </div>
  </div>
);

export const documentProps = {
  title: 'Bath Pride 2024',
  description: 'Events',
};
