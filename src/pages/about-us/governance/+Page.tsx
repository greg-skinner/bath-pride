import * as React from 'react';

import _carouselData from '@assets/carousel/carousel.json';
import { ICarousel } from '@components/carousel/carousel.type';
import { Link } from '@components/link/link';
import { NewsTitle } from '@components/newsTitle';

import styles from './index.module.scss';

const carouselData: ICarousel = _carouselData;

export const Page: React.FC = () => (
  <div>
    <NewsTitle title={'Governance'} />
    <div>
      Bath Pride is a registered charity and we exist to undertake our
      charitable objects. This page contains what our purpose is, our
      constitution, and our policies.
    </div>
    <NewsTitle title="Our Objects" />
    <div>
      As a charity, we exist to further our objects contained in{' '}
      <a
        className={styles.inlineLink}
        href="https://drive.google.com/file/d/1t19f6EMt3ZNfVcb1muu4epq2L8rkFGDK/view?usp=sharing"
      >
        our constitution
      </a>
      . These are:
    </div>
    <br />
    <div>
      To promote equality and diversity for the public benefit and in particular
      the elimination of discrimination on the grounds of sexual orientation or
      gender identity, including in particular but not exclusively by:
    </div>
    <ol type="a">
      <li>
        Organising and promoting events throughout the year to celebrate the
        LGBT+ community and raise awareness of discrimination and other issues
        affecting the LGBT+ community and the advancement of LGBT+ rights;
      </li>
      <li>
        Organising an annual festival celebrating the LGBT+ community and
        providing a space for discussion and advancement of LGBT+ rights;
      </li>
      <li>
        Raising awareness with the public of the LGBT+ experience, in particular
        the aspects of discrimination and the difficulties faced by LGBT+
        people;
      </li>
      <li>
        Associating with other organisations, including but not limited to
        government, charities, public and private organisations, and
        volunteering organisations, as appropriate for the advancement of LGBT+
        equality;
      </li>
      <li>
        Creating and publishing documents, publicity material, media, lectures,
        and other activities in line with these objects.
      </li>
    </ol>
    <NewsTitle title="Decision Making" />
    <div>
      Bath Pride is run by the{' '}
      <Link className={styles.inlineLink} href={'/about-us/our-team/'}>
        Board of Trustees
      </Link>{' '}
      who have a variety of duties, including:
    </div>
    <ul>
      <li>creating and approving all our policies and governing documents,</li>
      <li>approving budgets and action plans,</li>
      <li>
        provide guidance and expertise, setting the direction of Bath Pride’s
        activities,
      </li>
      <li>ensure compliance with all relevant laws and requirements</li>
    </ul>
    <div>
      There is a subcommittee of the board, called the{' '}
      <Link href={'/about-us/our-team/'}>Organising Committee</Link>. They are
      tasked with the more day-to-day running of Bath Pride, delivering the
      events and activities under the direction of the board. They are tasked
      with:
    </div>
    <ul>
      <li>
        organise, deliver, and evaluate Bath Pride events, with a specific focus
        on an annual event,
      </li>
      <li>
        oversee Bath Pride’s social media presence and create engaging digital
        content,
      </li>
      <li>connect and work with external organisations,</li>
      <li>
        ensure effective administration of Bath Pride, such as creating risk
        assessments, project plans, and budget plans,
      </li>
      <li>connect and engage with the LGBT+ community,</li>
      <li>provide support to the Board of Trustees,</li>
    </ul>
    <div>
      Members of the committee are appointed by the board, and are accountable
      to them in all their activities.
    </div>
    <div>
      We have created a{' '}
      <a
        className={styles.inlineLink}
        href="https://drive.google.com/file/d/1ABortbFfkxAk9gyMei8mswGxNH15QiRF/view?usp=sharing"
      >
        Decision Making Framework
      </a>{' '}
      that explains the ethos and principles to how we approach decisions within
      Bath Pride. There is also an{' '}
      <a
        className={styles.inlineLink}
        href="https://drive.google.com/file/d/1rRcGi-p9-ToMI1_kyGht6QZnPNtlOfMA/view?usp=sharing"
      >
        Organising Committee Terms of Reference
      </a>{' '}
      that outlines its powers and membership.
    </div>
    <NewsTitle title="Policies" />
    <div>
      We are still in the early stages of setting up our charity, and part of
      that process is creating our policies.
    </div>
    <div>
      Our{' '}
      <a
        className={styles.inlineLink}
        href="https://drive.google.com/file/d/1HYhpG--phvY7OZeyHzj6IMLcDyCeW8js/view?usp=sharing"
      >
        Finance Policy
      </a>{' '}
      outlines our process for approving income and expenditure, and our other
      financial controls.
    </div>
    <div>
      As we create and approve our other policies they will appear here.
    </div>
    <NewsTitle title="Documents" />
    <ul className={styles.links}>
      <li>
        <a
          className={styles.inlineLink}
          href="https://drive.google.com/file/d/1t19f6EMt3ZNfVcb1muu4epq2L8rkFGDK/view?usp=sharing"
        >
          Constitution
        </a>
      </li>
      <li>
        <a
          className={styles.inlineLink}
          href="https://drive.google.com/file/d/1ABortbFfkxAk9gyMei8mswGxNH15QiRF/view?usp=sharing"
        >
          Decision Making Framework
        </a>
      </li>
      <li>
        <a
          className={styles.inlineLink}
          href="https://drive.google.com/file/d/1rRcGi-p9-ToMI1_kyGht6QZnPNtlOfMA/view?usp=sharing"
        >
          Organising Committee Terms of Reference
        </a>
      </li>
      <li>
        <a
          className={styles.inlineLink}
          href="https://drive.google.com/file/d/1HYhpG--phvY7OZeyHzj6IMLcDyCeW8js/view?usp=sharing"
        >
          Finance Policy
        </a>
      </li>
    </ul>
  </div>
);

export const documentProps = {
  description: 'Governance',
  img: carouselData[0].file,
};
