import * as React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

import { EventTitle } from '@components/eventTitle';
import { StandardPage } from '@components/standardPage';

import _content from './wig.json';

const content: string[] = _content;

export const Page: React.FC = () => (
  <div>
    <EventTitle
      title={'WIG! Midsummer Night’s Dream'}
      date={new Date('2024-08-18')}
      time={[new Date('2024-08-18T18:00'), 'Late']}
      location={'Komedia'}
      description={'The Official Bath Pride 2024 after party'}
    />
    <StandardPage folder={'images'} content={content} date={''} title={''} />
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
