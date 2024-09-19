import * as React from 'react';

import { PartnerBubble } from '@components/partnerBubble';

import styles from './index.module.scss';

export const Page: React.FC = () => (
  <div className={styles.page}>
    <div className={styles.title}>Our partners</div>
    <div className={styles.partners}>
      <PartnerBubble
        accent={1}
        img={"@logos/WIG.jpg::WIG!'s logo"}
        title={'WIG!'}
        link={'https://www.instagram.com/wigbath'}
        aria="WIG!'s Instagram"
      />
      <PartnerBubble
        accent={2}
        img={
          '@logos/The_Holburne_Museum.jpg::The front facade of the Holburne Museum'
        }
        title={'The Holburne Museum'}
        link={'https://www.holburne.org/'}
        aria="The Holburne Museum's website"
      />
      <PartnerBubble
        accent={3}
        img={"@logos/Komedia.jpg::Komedia's logo"}
        title={'Komedia'}
        link={'https://komediabath.co.uk/'}
        aria="Komedia's website"
      />
    </div>
    <div className={styles.title}>Our sponsors</div>
    <div className={styles.partners}>
      <PartnerBubble
        accent={4}
        img={"@logos/Botanica-Studio.png::Botanica's logo"}
        title={'Botanica Studio'}
        link={'https://www.botanicastudio.co.uk/'}
        aria="Botanica Studio's website"
      />
      <PartnerBubble
        accent={5}
        img={"@logos/minuteman.png::Minuteman's logo"}
        title={'Minuteman Press'}
        link={'https://minutemanbath.co.uk/'}
        aria="Botanica Studio's website"
      />
    </div>
  </div>
);

export const documentProps = {
  title: 'Our Partners',
  description: 'Our partners',
};
