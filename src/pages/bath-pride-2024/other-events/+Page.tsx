import * as React from 'react';

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
    />
    <BulletPage folder={'images'} content={content} date={''} title={''} />
  </div>
);

export const documentProps = {
  title: 'Other Pride events',
  description:
    "Bath can seem like a quiet city without much going on, but there's a lot of events happening if you know where to look for them.",
  img: 'images/logo_stone.png',
};
