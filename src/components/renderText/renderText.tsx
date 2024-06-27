import * as React from 'react';

import { parseText } from '@utils';

import styles from './renderText.module.scss';
import classNames from 'classnames';

export interface IRenderTextProps {
  className?: string;
  cssVar?: { [index: string]: string };
  text: string;
}

export const RenderText: React.FC<IRenderTextProps> = ({
  className,
  cssVar,
  text,
}) => {
  if (text[0] === '#') {
    return (
      <h3 className={classNames(className)} style={cssVar}>
        {parseText(text.slice(2), styles)}
      </h3>
    );
  }

  if (text[0] === '/') {
    return (
      <div className={classNames(className, styles.italic)} style={cssVar}>
        {parseText(text.slice(2), styles)}
      </div>
    );
  }

  if (text.indexOf('*') > -1) {
    const list = text.split(/ ?\* ?/);

    return (
      <div className={classNames(className)} style={cssVar}>
        {parseText(list[0], styles)}
        <ul>
          {list.slice(1, -1).map((lineItem) => (
            <li key={lineItem}>{parseText(lineItem, styles)}</li>
          ))}
        </ul>
        {parseText(list[list.length - 1], styles)}
      </div>
    );
  }

  return (
    <div className={classNames(className)} style={cssVar}>
      {parseText(text, styles)}
    </div>
  );
};
