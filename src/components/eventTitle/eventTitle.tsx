import * as React from 'react';

import { NewsImage } from '@components/image';
import { Link } from '@components/link/link';
import { format } from 'date-fns';

import styles from './eventTitle.module.scss';
import classNames from 'classnames';

export interface IEventTitleProps {
  className?: string;
  title: string;
  img?: string;
  date?: Date;
  label?: string;
  time?: [Date, Date | string];
  location?: string;
  description: string;
  link?: string;
  aria: string;
}

export const EventTitle: React.FC<IEventTitleProps> = ({
  className,
  title,
  date,
  label,
  img,
  time,
  location,
  description,
  link,
  aria,
}) => (
  <div
    className={classNames(className, styles.content, { [styles.noImg]: !img })}
  >
    {img && (
      <NewsImage
        className={styles.image}
        cssVar={{}}
        dataLine={img}
        folder={'images'}
      />
    )}
    {link ? (
      <Link aria={aria} className={styles.title} href={link}>
        {title}
      </Link>
    ) : (
      <div className={styles.title}>{title}</div>
    )}
    <div className={styles.date}>
      {date && format(date, 'do MMMM yyyy')}
      {time
        ? `, ${format(time[0], 'HH:mm')}-${
            typeof time[1] === 'string' ? time[1] : format(time[1], 'HH:mm')
          }`
        : ''}
      {label}
    </div>
    <div className={styles.location}>{location}</div>
    <div className={styles.description}>{description}</div>
  </div>
);
