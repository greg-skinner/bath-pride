import * as React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

import { Accessibility } from '@components/accessibility';
import { EventTitle } from '@components/eventTitle';
import { StandardPage } from '@components/standardPage';

import _content from './wig.json';

import styles from './index.module.scss';

const content: string[] = _content;

export const Page: React.FC = () => (
  <div className={styles.page}>
    <EventTitle
      title={'WIG! Midsummer Night’s Dream'}
      date={new Date('2024-08-18')}
      time={[new Date('2024-08-18T18:00'), 'Late']}
      location={'Komedia'}
      description={'The Official Bath Pride 2024 after party'}
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
            options={{
              'level-access': 'Level access to the show',
              toilets: 'Accessible and gender-neutral toilets',
              seating: 'Seating provided',
              'assistance-dogs': 'Assistance dogs welcome',
              'assistant-ticket':
                'Complimentary ticket for a personal assistant',
              parking: 'Provision for blue badge holder parking',
            }}
            link={'https://komediabath.co.uk/plan-your-visit/accessibility/'}
            aria="Komedia's accessibility information"
          />
        ),
      }}
    />
    <InstagramEmbed
      url="https://www.instagram.com/wigbath/"
      width={'100%'}
      debug
    />
    <br />
    <div>PS. bath tubs not provided</div>
  </div>
);

export const documentProps = {
  title: 'WIG!',
  description:
    'The Official Bath Pride 2024 after party - WIG! Midsummer Night’s Dream',
  image: 'images/WIG.jpg',
};
