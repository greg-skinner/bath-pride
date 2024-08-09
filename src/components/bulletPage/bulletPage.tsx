import * as React from 'react';

import { Image } from '@components/image';
import { NewsTitle } from '@components/newsTitle';
import { RenderText } from '@components/renderText';

import styles from './bulletPage.module.scss';
import classNames from 'classnames';

export interface IBulletPageProps {
  className?: string;
  content: string[];
  date: string;
  folder?: string;
  title: string;
  inject?: { [key: number]: React.ReactNode };
}

export const BulletPage: React.FC<IBulletPageProps> = ({
  className,
  content,
  date,
  folder,
  title,
  inject,
}) => {
  const text: string[] = [];
  const images: { [index: number]: string } = {};
  content.forEach((entry) => {
    if (entry[0] === '@') {
      images[text.length] = entry;
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
          {images[index] && (
            <Image
              className={classNames(styles.image)}
              dataLine={images[index]}
              cssVar={{ '--grid-row': String(index + 2) }}
              folder={folder || 'news'}
            />
          )}
          <RenderText
            className={classNames(styles.text)}
            cssVar={{
              '--grid-column': String(images[index] ? 2 : 1),
              '--grid-row': String(index + 2),
            }}
            text={item}
          />
          {inject && inject[index] && (
            <div
              className={styles.text}
              style={
                {
                  '--grid-column': String(3),
                  '--grid-row': String(index + 2),
                } as React.CSSProperties
              }
            >
              {inject[index]}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
