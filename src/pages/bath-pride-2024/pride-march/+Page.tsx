import * as React from 'react';

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
    <StandardPage folder={'images'} content={content} date={''} title={''} />
  </div>
);

export const documentProps = {
  title: '2024 Pride March',
  description: 'Pride March through the city, pride is a protest!',
};
