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
  const regex = dataLine.match(/@(.*?):(.*?):(.*)/);
  if (regex !== null) {
    const [, file, caption, alt] = regex;

    return (
      <div className={classNames(className, styles.content)} style={cssVar}>
        <img src={`${APP_CONFIG.BASE_URL}${folder}/${file}`} alt={alt} />
        <label>{caption}</label>
      </div>
    );
  }

  return null;
};
