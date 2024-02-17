import * as React from 'react';

import styles from './newsTitle.module.scss';
import classNames from 'classnames';

export interface INewsTitleProps {
  className?: string;
  date?: string;
  title: string;
}

export const NewsTitle: React.FC<INewsTitleProps> = ({
  className,
  date,
  title,
}) => (
  <div className={classNames(className, styles.header)}>
    <div className={styles.title}>{title}</div>
    {date && <div className={styles.date}>{date}</div>}
  </div>
);
