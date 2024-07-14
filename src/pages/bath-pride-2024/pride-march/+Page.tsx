import * as React from 'react';

import { Accessibility } from '@components/accessibility';
import { EventTitle } from '@components/eventTitle';
import { StandardPage } from '@components/standardPage';

import _content from './march.json';

import styles from './index.module.scss';

const content: string[] = _content;

export const Page: React.FC = () => (
  <div className={styles.page}>
    <EventTitle
      title={'Pride march'}
      date={new Date('2024-08-18')}
      time={[new Date('2024-08-18T13:00'), new Date('2024-08-18T14:00')]}
      location={'location to be confirmed'}
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
            copy="We are still in the planning process and will be able to provide more accessibility information closer to the event."
          />
        ),
      }}
    />
  </div>
);

export const documentProps = {
  title: '2024 Pride March',
  description: 'Pride March through the city, pride is a protest!',
};
