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
    />
    <StandardPage
      folder={'images'}
      content={content}
      date={''}
      title={''}
      inject={{
        0: (
          <Accessibility
            options={{}}
            link={''}
            copy="The march route is step free. There are some slopes that we will be walking up, including William Street, where we start, and Union Street. Please be aware that some of the roads we will be walking may have uneven paving. Please see the carousel below for photographs of the whole route."
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
