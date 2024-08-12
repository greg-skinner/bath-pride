import * as React from 'react';

import { Accessibility } from '@components/accessibility';
import { BulletPage } from '@components/bulletPage/bulletPage';
import { MarchCarousel } from '@components/carousel';
import { EventTitle } from '@components/eventTitle';
import { StandardPage } from '@components/standardPage';

import _content from './march.json';
import _preMarch from './preMarch.json';
import _terms from './terms.json';

import styles from './index.module.scss';

const content: string[] = _content;
const preMarch: string[] = _preMarch;
const terms: string[] = _terms;

export const Page: React.FC = () => (
  <div className={styles.page}>
    <EventTitle
      title={'Pride march'}
      date={new Date('2024-08-18')}
      time={[new Date('2024-08-18T13:00'), new Date('2024-08-18T14:00')]}
      location={'starting in William Street'}
      description={'Pride March through the city, pride is a protest!'}
      aria=""
    />
    <StandardPage
      folder={'images'}
      content={content}
      date={''}
      title={''}
      inject={{
        0: (
          <Accessibility
            link={''}
            aria={''}
            options={{}}
            copy="Please see the carousel below for photographs of the whole route. Key information: * Step free * Some slopes and uneven paving * Toilets on the route can be found via the = http://toiletfinder.net/ = Toilet Finder app = Toilet Finder app = and = http://www.toiletmap.org.uk = Great British Public Toilet Map = Great British Public Toilet Map = * "
          />
        ),
      }}
    />
    <MarchCarousel className={styles.carousel} />
    <BulletPage content={preMarch} date={''} title={''} />
    <MarchCarousel className={styles.carousel} preMarch />
    <div className={styles.termsHeader}>Terms and conditions</div>
    <BulletPage content={terms} date={''} title={''} />
  </div>
);

export const documentProps = {
  title: '2024 Pride March',
  description: 'Pride March through the city, pride is a protest!',
};
