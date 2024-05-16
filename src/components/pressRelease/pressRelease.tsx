import * as React from 'react';

import { Image } from '@components/image';
import { NewsTitle } from '@components/newsTitle';
import { RenderText } from '@components/renderText';

import styles from './pressRelease.module.scss';
import classNames from 'classnames';

export interface IPressReleaseProps {
  className?: string;
  content: string[];
  date: string;
  folder?: string;
  title: string;
}

export const PressRelease: React.FC<IPressReleaseProps> = ({
  className,
  content,
  date,
  folder,
  title,
}) => {
  const text: string[] = [];
  const images: string[] = [];
  content.forEach((entry) => {
    if (entry[0] === '@') {
      images.push(entry);
    } else {
      text.push(entry);
    }
  });

  return (
    <div className={classNames(className, styles.content)}>
      {text.map((item, index) => (
        <React.Fragment key={index}>
          {index === 0 && (
            <NewsTitle className={styles.header} date={date} title={title} />
          )}
          <RenderText
            className={classNames(styles.text)}
            cssVar={{ '--grid-row': String(index + 2) }}
            text={item}
          />
        </React.Fragment>
      ))}
      {images.map((item) => (
        <Image
          key={item}
          className={classNames(styles.image)}
          dataLine={item}
          folder={folder || 'news'}
        />
      ))}
    </div>
  );
};
