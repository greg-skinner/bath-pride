import * as React from 'react';

import { Image } from '@components/image';

import styles from './index.module.scss';
import { Link } from '@components/link/link';

export const Page: React.FC = () => (
  <div className={styles.page}>
    <div className={styles.title}>Coming soon</div>
    <div className={styles.copy}>
      Planning for Bath Pride 2025 is underway, and we'll be sharing those plans
      with you as soon as we can!
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
      </Link>{' '}
      or{' '}
      <Link
        href="https://pay.sumup.com/b2c/QC5QJJED"
        aria="Our SumUp donation link"
      >
        SumUp
      </Link>
      ; we'll be opening applications for volunteers for the day soon.
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
