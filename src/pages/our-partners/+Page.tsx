import * as React from 'react';

import { PartnerBubble } from '@components/partnerBubble';

import styles from './index.module.scss';

export const Page: React.FC = () => (
  <div className={styles.page}>
    <div className={styles.title}>Our partners</div>
    <div className={styles.partners}>
      <PartnerBubble
        accent={0}
        img={"@logos/bath-rugby.png::Bath Rugby's logo"}
        title={'Bath Rugby'}
        link={'https://www.bathrugby.com/'}
        aria="Bath Rugby's website"
      />
      <PartnerBubble
        accent={1}
        img={
          '@logos/The_Holburne_Museum.jpg::The front facade of the Holburne Museum'
        }
        title={'The Holburne Museum'}
        link={'https://www.holburne.org/'}
        aria="The Holburne Museum's website"
      />
    </div>
    <div className={styles.title}>Our sponsors</div>
    <div className={styles.partners}>
      <PartnerBubble
        accent={2}
        img={"@logos/minuteman.png::Minuteman's logo"}
        title={'Minuteman Press'}
        link={'https://minutemanbath.co.uk/'}
        aria="Botanica Studio's website"
      />
    </div>
    <div className={styles.title}>Our supporters</div>
    <div className={styles.partners}>
      <PartnerBubble
        accent={3}
        img={"@logos/GDC_Logo_Colour_Circle.png::Good Day Cafe's logo"}
        title={'Good Day Cafe'}
        link={'https://gooddaycafe.co.uk/'}
        aria="Good Day Cafe's website"
      />
      <PartnerBubble
        accent={4}
        img={"@logos/one-five-tattoo.png::One Five Tattoo's logo"}
        title={'One Five Tattoo'}
        link={'https://www.onefivetattoo.co.uk/'}
        aria="One Five Tattoo's website"
      />
      <PartnerBubble
        accent={5}
        img={"@logos/DD_logo.gif::Different Dynamics' logo"}
        title={'Different Dynamics'}
        link={'http://differentdynamics.com/'}
        aria="Different Dynamics' website"
      />
    </div>
  </div>
);

export const documentProps = {
  title: 'Our Partners',
  description: 'Our partners',
};
