import * as React from 'react';

import { Image } from '@components/image';

import styles from './partnerBubble.module.scss';
import classNames from 'classnames';

export interface IPartnerBubbleProps {
  accent: number;
  img: string;
  title: string;
  link: string;
  className?: string;
}

export const PartnerBubble: React.FC<IPartnerBubbleProps> = ({
  accent,
  className,
  img,
  title,
  link,
}) => (
  <a
    className={classNames(className, styles.content)}
    data-index={accent}
    href={link}
  >
    <Image
      className={styles.image}
      cssVar={{}}
      dataLine={img}
      folder={'images'}
    />
    <div className={styles.title}>{title}</div>
  </a>
);
