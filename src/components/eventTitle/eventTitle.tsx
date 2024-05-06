import * as React from 'react';

import { Image } from '@components/image';
import { Link } from '@components/link/link';
import { format } from 'date-fns';

import styles from './eventTitle.module.scss';
import classNames from 'classnames';

export interface IEventTitleProps {
  className?: string;
  title: string;
  img?: string;
  date: Date;
  time?: [Date, Date | string];
  location: string;
  description: string;
  link?: string;
}

export const EventTitle: React.FC<IEventTitleProps> = ({
  className,
  title,
  date,
  img,
  time,
  location,
  description,
  link,
}) => (
  <div
    className={classNames(className, styles.content, { [styles.noImg]: !img })}
  >
    {img && (
      <Image
        className={styles.image}
        cssVar={{}}
        dataLine={img}
        folder={'images'}
      />
    )}
    {link ? (
      <Link className={styles.title} href={link}>
        {title}
      </Link>
    ) : (
      <div className={styles.title}>{title}</div>
    )}
    <div className={styles.date}>
      {format(date, 'do MMMM yyyy')}
      {time
        ? `, ${format(time[0], 'HH:mm')}-${
            typeof time[1] === 'string' ? time[1] : format(time[1], 'HH:mm')
          }`
        : ''}
    </div>
    <div className={styles.location}>{location}</div>
    <div className={styles.description}>{description}</div>
  </div>
);
