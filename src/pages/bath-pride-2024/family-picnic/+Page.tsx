import * as React from 'react';

import { Accessibility } from '@components/accessibility';
import { EventTitle } from '@components/eventTitle';
import { StandardPage } from '@components/standardPage';

import _content from './picnic.json';

import styles from './index.module.scss';

const content: string[] = _content;

export const Page: React.FC = () => (
  <div className={styles.page}>
    <EventTitle
      title={'Family Picnic'}
      date={new Date('2024-08-18')}
      time={[new Date('2024-08-18T12:00'), new Date('2024-08-18T17:00')]}
      location={'Holburne Museum'}
      description={
        'A chance to sit, relax and listen to some live local music.'
      }
    />
    <StandardPage
      folder={'images'}
      content={content}
      date={''}
      title={''}
      inject={{
        0: (
          <Accessibility
            options={{
              parking: 'Blue badge car parking',
              lifts: 'Lifts inside the museum',
              'level-access': 'Level access throughout',
              toilets: 'Accessible toilets',
              seating: 'Inside & outside seating',
              wheelchairs: 'Wheelchairs available',
              'assistance-dogs': 'Assistance dogs welcome',
              'hearing-loop': 'Hearing loop in museum',
            }}
            link={'https://www.holburne.org/planning-your-visit/accessibility/'}
          />
        ),
      }}
    />
  </div>
);

export const documentProps = {
  title: '2024 Family Picnic',
  description: 'A chance to sit, relax and listen to some live local music.',
  img: 'images/The_Holburne_Museum.jpg',
};
