import * as React from 'react';

import { Link } from '@components/link/link';

import styles from './index.module.scss';

export const Page: React.FC = () => (
  <div className={styles.page}>
    <div className={styles.leading}>
      Bath Pride is a registered charity. Everything we do is aimed towards
      bringing the local LGBT+ community through events and campaigns.
    </div>
    <Link className={styles.link} href="about-us/support-us">
      Support us
    </Link>
    <div>
      We are a charity, and require the support of people to volunteer and
      donate to enable us to function. Find out how you can support us to
      continue our work and make Bath a more inclusive and accepting city.
    </div>
    <Link className={styles.link} href="about-us/governance">
      Governance
    </Link>
    <div>
      As a registered charity, we exist to undertake our charitable objects.
      Find out about our constitution, policies, and frameworks that exist to
      enable us to undertake our work.
    </div>
    <Link className={styles.link} href="about-us/our-team">
      Our Team
    </Link>
    <div>
      Bath Pride is run by local LGBT+ people who volunteer their time to bring
      you Bath Pride. Find out about our Trustee Board and Organising Committee.
    </div>
    <Link className={styles.link} href="about-us/our-values">
      Our Values
    </Link>
    <div>
      Everything we do is guided by our values: Affirming, Transparent, Justice,
      Grassroots, Vibrant, and Safe. Find out how we define our values in
      practice.
    </div>
    <br />
    <div className={styles.leading}>
      If you have any questions or queries, please email{' '}
      <a className={styles.inlineLink} href="mailto:hello@bathpride.org">
        hello@bathpride.org
      </a>
      . Remember that we are all volunteers so it may take some time to get back
      to you, but we will respond as quickly as we can.
    </div>
  </div>
);

export const documentProps = {
  title: 'About Us',
  description: 'About us',
};
