import * as React from 'react';

import { MarchCarousel } from '@components/carousel';
import { EventTitle } from '@components/eventTitle';
import { PressRelease } from '@components/pressRelease';
import { IMetaData } from '@renderer/types';

import _content from './march-information.json';

import styles from '../index.module.scss';

const content: string[] = _content;

export const Page: React.FC = () => (
  <div className={styles.page}>
    <EventTitle
      title={'Pride march route information'}
      date={new Date('2024-08-18')}
      time={[new Date('2024-08-18T13:00'), new Date('2024-08-18T14:00')]}
    />
    <PressRelease folder={'images'} content={content} date={''} title={''} />
    <MarchCarousel className={styles.carousel} />
  </div>
);

export const documentProps: IMetaData = {
  title: '2024 Pride March',
  description: 'Pride March through the city, pride is a protest!',
  hidden: true,
};
