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
  let file;
  let caption;
  let alt;
  try {
    const regex = dataLine.match(/@(.*?):(.*?):(.*)/);
    if (regex !== null) {
      [, file, caption, alt] = regex;
    }
  } catch (e) {
    file = 'bath-pride-logo_stone.png';
    alt = 'The Bath Pride Logo';
    caption = '';
    // eslint-disable-next-line no-param-reassign -- fallback in catch
    folder = 'images';
  }

  return (
    <div className={classNames(className, styles.content)} style={cssVar}>
      <img src={`${APP_CONFIG.BASE_URL}${folder}/${file}`} alt={alt} />
      <label>{caption}</label>
    </div>
  );
};
