import * as React from 'react';

import styles from './index.module.scss';

export const Page: React.FC = () => (
  <div>
    <div className={styles.header}>Acknowledgements</div>
    <div>We are deeply indebted to Sophie Tyler who developed the brand style for Bath Pride.</div>
    <div>Thanks to Greg Skinner, who built and maintains the website.</div>
    <div>
      Some icons on this website are by{' '}
      <a
        aria-label="Smashicons icon attribution"
        target="_blank"
        rel="noreferrer"
        href="https://www.freepik.com/icon/guide-dog_1512681"
      >
        Smashicons
      </a>
      ,{' '}
      <a
        aria-label="Hadi Davodpour icon attribution"
        target="_blank"
        rel="noreferrer"
        href="https://thenounproject.com/icon/hearing-loop-28162/"
      >
        Hadi Davodpour from Noun Project
      </a>{' '}
      and{' '}
      <a
        aria-label="uxwing icon attribution"
        target="_blank"
        rel="noreferrer"
        href="https://uxwing.com/"
      >
        uxwing
      </a>
      , and are used under Creative Commons licenses.
    </div>{' '}
  </div>
);

export const documentProps = {
  title: 'Acknowledgements',
  description: 'Acknowledgements for the Bath Pride website.',
};
