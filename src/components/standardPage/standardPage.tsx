import * as React from 'react';

import { NewsImage } from '@components/image';
import { NewsTitle } from '@components/newsTitle';
import { RenderText } from '@components/renderText';

import styles from './standardPage.module.scss';
import classNames from 'classnames';

export interface IStandardPageProps {
  className?: string;
  content: string[];
  date: string;
  folder?: string;
  title: string;
  inject?: { [key: number]: React.ReactNode };
}

export const StandardPage: React.FC<IStandardPageProps> = ({
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

  const createCssVars = (index: number) => {
    const imagePosition = Object.keys(images).indexOf(String(index));
    let end;
    if (imagePosition === Object.keys(images).length - 1) {
      end = text.length;
    } else {
      end = +Object.keys(images)[imagePosition + 1];
    }

    return {
      '--grid-start': String(index + (index === 0 && title ? 1 : 2)),
      '--grid-end': String(end + 2),
    };
  };

  return (
    <div className={classNames(className, styles.content)}>
      {text.map((item, index) => (
        <React.Fragment key={index}>
          {index === 0 && title && (
            <NewsTitle className={styles.header} date={date} title={title} />
          )}
          <RenderText
            className={classNames(styles.text)}
            cssVar={{ '--grid-row': String(index + 2) }}
            text={item}
          />
          {images[index] && (
            <div
              className={styles.image}
              style={createCssVars(index) as React.CSSProperties}
            >
              <NewsImage
                dataLine={images[index]}
                cssVar={createCssVars(index)}
                folder={folder || 'news'}
              />
              {inject && inject[index]}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
