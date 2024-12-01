import * as React from 'react';

import styles from './image.module.scss';
import classNames from 'classnames';

export interface IImageProps {
  className?: string;
  cssVar?: { [index: string]: string };
  dataLine: string;
  folder: string;
}

export const Image: React.FC<IImageProps> = ({
  className,
  cssVar,
  dataLine,
  folder,
}) => {
  let file, caption, alt;
  try {
    const regex = dataLine.match(/@(.*?):(.*?):(.*)/);
    if (regex !== null) {
      [, file, caption, alt] = regex;
    }  
  } catch (e) {
    file = 'bath-pride-logo_stone.png';
    alt = 'The Bath Pride Logo';
    caption = '';
    folder = 'images';
  }

  return (
    <div className={classNames(className, styles.content)} style={cssVar}>
      <img src={`${APP_CONFIG.BASE_URL}${folder}/${file}`} alt={alt} />
      <label>{caption}</label>
    </div>
  );
};
