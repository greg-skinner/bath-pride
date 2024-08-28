import * as React from 'react';

import styles from './image.module.scss';
import classNames from 'classnames';

interface IBaseProps {
  className?: string;
  cssVar?: { [index: string]: string };
  folder: string;
}

export type INewsImageProps = {
  dataLine: string;
} & IBaseProps;

export type IImageProps = {
  file: string;
  caption: string;
  alt: string;
} & IBaseProps;

export const Image: React.FC<IImageProps> = ({
  className,
  cssVar,
  folder,
  file,
  caption,
  alt,
}) => (
  <div className={classNames(className, styles.content)} style={cssVar}>
    <img src={`${APP_CONFIG.BASE_URL}${folder}/${file}`} alt={alt} />
    <label>{caption}</label>
  </div>
);

export const NewsImage: React.FC<INewsImageProps> = ({
  className,
  cssVar,
  dataLine,
  folder,
}) => {
  const regex = dataLine.match(/@(.*?):(.*?):(.*)/);
  if (regex !== null) {
    const [, file, caption, alt] = regex;

    return (
      <Image
        className={className}
        cssVar={cssVar}
        folder={folder}
        file={file}
        caption={caption}
        alt={alt}
      />
    );
  }

  return null;
};
