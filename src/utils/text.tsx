import React from 'react';

import { Link } from '@components/link/link';

export const parseText = (
  text: string,
  styles: CSSModuleClasses,
  partial: React.ReactNode[] = []
): React.ReactNode[] => {
  const output: React.ReactNode[] = partial;

  const mode = /[`=]/g.exec(text);

  if (!mode) {
    return [
      ...output,
      <React.Fragment key={output.length}>{text}</React.Fragment>,
    ];
  }

  if (mode[0] === '`') {
    output.push(
      <React.Fragment key={output.length}>
        {text.slice(0, mode.index)}
      </React.Fragment>
    );

    output.push(
      <span className={styles.mono} key={output.length}>
        {text.slice(mode.index, text.slice(mode.index).indexOf('`'))}
      </span>
    );

    return parseText(
      text.slice(text.slice(mode.index).indexOf('`')),
      styles,
      output
    );
  }

  if (mode[0] === '=') {
    output.push(
      <React.Fragment key={output.length}>
        {text.slice(0, mode.index)}
      </React.Fragment>
    );

    const link = /= (.*?) = (.*?) =(.*)/.exec(text.slice(mode.index));

    if (link) {
      output.push(
        <Link href={link[1]} key={output.length}>
          {link[2]}
        </Link>
      );

      return parseText(link[3], styles, output);
    }
  }

  return [...partial];
};

export const flattenText = (text = '', partial = ''): string => {
  if (text[0] === '/' || text[0] === '#') {
    return flattenText(text.slice(2));
  }

  const mode = /[`=]/g.exec(text);

  if (!mode) {
    return partial + text;
  }

  let output = partial;

  if (mode[0] === '`') {
    output += text.slice(0, mode.index);

    output += text.slice(mode.index, text.slice(mode.index).indexOf('`'));

    return flattenText(text.slice(text.slice(mode.index).indexOf('`')), output);
  }

  if (mode[0] === '=') {
    output += text.slice(0, mode.index);

    const link = /= (.*?) = (.*?) =(.*)/.exec(text.slice(mode.index));

    if (link) {
      output += link[2];

      return flattenText(link[3], output);
    }
  }

  return partial + text;
};
