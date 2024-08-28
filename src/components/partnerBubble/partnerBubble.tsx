import * as React from 'react';

import { NewsImage } from '@components/image';

import styles from './partnerBubble.module.scss';
import classNames from 'classnames';

export interface IPartnerBubbleProps {
  accent: number;
  img: string;
  title: string;
  link: string;
  className?: string;
  aria: string;
}

export const PartnerBubble: React.FC<IPartnerBubbleProps> = ({
  accent,
  className,
  img,
  title,
  link,
  aria,
}) => (
  <a
    aria-label={aria}
    className={classNames(className, styles.content)}
    data-index={accent}
    href={link}
  >
    <NewsImage
      className={styles.image}
      cssVar={{}}
      dataLine={img}
      folder={'images'}
    />
    <div className={styles.title}>{title}</div>
  </a>
);
