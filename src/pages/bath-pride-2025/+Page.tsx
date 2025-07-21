import * as React from 'react';

import { Image } from '@components/image';

import styles from './index.module.scss';
import { Link } from '@components/link/link';

export const Page: React.FC = () => (
  <div className={styles.page}>
    <div className={styles.title}>Bath Pride 2025</div>
    <div className={styles.copy}>
      Bath Pride 2025 will be happening on 26th July, when we will be partying
      our socks off in the centre of our beautiful city. We will be kicking the
      day off with a parade to celebrate the local LGBTQ+ community and advocate
      for equal rights for queer and trans individuals.
    </div>
    <Image
      className={styles.image}
      folder={'images/2025'}
      file={'announcement.png'}
      caption={''}
      alt={
        "A rainbow background has text in a splash bubble readnig 'Bath Pride 2025 is here!' "
      }
    />
    <div className={styles.copy}>
      We will start and finish the route at Sydney Gardens, where there will be
      stalls, music, performers, speeches, and lots of space to picnic and
      socialise. Accessibility information, a timetable, route details, and more
      will be shared in due course.
    </div>
    <div className={styles.copy}>
      Bath Pride is free and everyone is welcome to join us for the parade -
      larger groups (such as charities, societies/ clubs, dance/ performing arts
      groups) who would like to march together please fill out{' '}
      <Link
        href={'https://forms.gle/PhrPSmqBBszX6jwV8'}
        aria={'Link to the march signup form'}
      >
        this form
      </Link>
      !
    </div>
    <div className={styles.copy}>
      We would love for you to join us directly on the day - we have forms for
      people to{' '}
      <Link
        href={'https://forms.gle/ZLJhrHmLBuntC5JUA'}
        aria={'Link to volunteer signup form'}
      >
        volunteer to help
      </Link>{' '}
      facilitate the event, to sign up to{' '}
      <Link
        href={'https://forms.gle/74u3WFPGMLowxGyN9'}
        aria={'Link to the stallholder signup form'}
      >
        have a stall
      </Link>{' '}
      on the day, or to{' '}
      <Link
        href={'https://forms.gle/DM2xiVdmpZsDgAZf6'}
        aria={'Link to the performer signup form'}
      >
        perform on the day
      </Link>{' '}
      on our stage! For business who want to support us even whether they can be
      there on the day or not, we're running a{' '}
      <Link
        href={'https://forms.gle/zhViUCg4L5M2uwzYA'}
        aria={'Link to store window compeition signup form'}
      >
        store window display competition
      </Link>{' '}
      as well!
    </div>
    <div className={styles.copy}>
      Bath Pride is an entirely grassroots project with no corporate funding, so
      any contribution large or small is incredibly significant for us. You can
      help make Bath Pride 2025 happen by donating to us via{' '}
      <Link
        href="https://www.paypal.com/gb/fundraiser/charity/5069290"
        aria={'Our PayPal donation link'}
      >
        PayPal
      </Link>
      ,{' '}
      <Link
        href="https://pay.sumup.com/b2c/QC5QJJED"
        aria="Our SumUp donation link"
      >
        SumUp
      </Link>{' '}
      or{' '}
      <Link
        className={styles.link}
        href={'https://www.giveasyoulive.com/charity/bath-pride'}
        aria={'Our Give As You Live donation link'}
      >
        Give As You Live
      </Link>
      .
    </div>
    <div className={styles.copy}></div>
    <Image
      className={styles.image}
      folder={'images/2024'}
      file={'holburne.jpg'}
      caption={'Credit: Mitch Williams'}
      alt={'The crowd outside the Holburne museum with various pride flags'}
    />
  </div>
);

export const documentProps = {
  title: 'Bath Pride 2025',
  description: 'Coming soon...',
  img: 'images/2024/holburne.jpg',
};
