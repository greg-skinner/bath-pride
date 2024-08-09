import * as React from 'react';

import { Accessibility } from '@components/accessibility';
import { BulletPage } from '@components/bulletPage/bulletPage';
import { EventTitle } from '@components/eventTitle';

import _content from './other.json';

import styles from './index.module.scss';

const content: string[] = _content;

export const Page: React.FC = () => (
  <div className={styles.page}>
    <EventTitle
      title={'Other Pride events'}
      description={
        "Bath can seem like a quiet city without much going on, but there's a lot of events happening if you know where to look for them. We've partnered with a variety of venues that are putting on events around the Pride weekend to spotlight them here."
      }
      aria=""
    />
    <BulletPage
      className={styles.content}
      folder={'images'}
      content={content}
      date={''}
      title={''}
      inject={{
        0: (
          <Accessibility
            smaller
            className={styles.accessibility}
            options={{
              'level-access': 'Level access to the event',
              toilets: 'Accessible toilet',
              seating: 'Inside seating for the event',
              'assistance-dogs': 'Assistance dogs welcome',
            }}
            link=""
            aria=""
          />
        ),
        1: (
          <Accessibility
            smaller
            className={styles.accessibility}
            options={{
              'level-access': '7 steps to the event',
              seating: 'Inside seating for the event',
              'assistance-dogs': 'Dogs welcome',
            }}
            link="/our-partners/accessibility/daisy-and-bean"
            aria="Accessibility details for Daisy and Bean"
          />
        ),
        2: (
          <Accessibility
            smaller
            className={styles.accessibility}
            options={{
              'level-access': 'Level access to the event',
              toilets: 'Accessible toilet',
              seating: 'Inside seating for the event',
              'assistance-dogs': 'Assistance dogs welcome',
            }}
            link=""
            aria=""
          />
        ),
        3: (
          <Accessibility
            smaller
            className={styles.accessibility}
            options={{
              'level-access': 'Level access to the event',
              toilets: 'Accessible toilet',
              seating: 'Inside seating',
              'assistance-dogs': 'Assistance dogs welcome',
            }}
            link="/our-partners/accessibility/boom-battle-bar"
            aria="Accessibility details for Boom Battle Bar"
          />
        ),
        4: (
          <Accessibility
            options={{
              'level-access': 'Level access to the event',
              toilets: 'Accessible and gender-neutral toilets',
              'assistance-dogs': 'Assistance dogs welcome',
              'assistant-ticket':
                'Complimentary ticket for a personal assistant',
              parking: 'Provision for blue badge holder parking',
            }}
            link={'https://komediabath.co.uk/plan-your-visit/accessibility/'}
            aria="Komedia's accessibility information"
            smaller
            className={styles.accessibility}
          />
        ),
      }}
    />
  </div>
);

export const documentProps = {
  title: 'Other Pride events',
  description:
    "Bath can seem like a quiet city without much going on, but there's a lot of events happening if you know where to look for them.",
  img: 'images/logo_stone.png',
};
