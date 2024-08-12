import * as React from 'react';

import { RenderText } from '@components/renderText';

import { IAccessibilityIcon } from './accessibility.types';
import { AccessibilityIcon } from './accessibilityIcon';

import styles from './accessibility.module.scss';
import classNames from 'classnames';

export type IAccessibilityProps = {
  className?: string;
  options: Partial<{ [key in IAccessibilityIcon]: string }>;
  copy?: string;
  link: string;
  aria: string;
  smaller?: boolean;
};

export const Accessibility: React.FC<IAccessibilityProps> = ({
  className,
  options,
  link,
  copy,
  aria,
  smaller,
}) => {
  const content = (
    <>
      <div className={styles.header}>
        <div className={styles.title}>Accessibility</div>
        {Object.keys(options).length > 0 && (
          <div className={styles.subHead}>Summary</div>
        )}
        {link && <div className={styles.link}>Click for more details</div>}
      </div>
      {copy && <RenderText className={styles.copy} text={copy} />}
      {Object.keys(options).map((option) => (
        <div className={styles.entry} key={option}>
          <AccessibilityIcon icon={option as IAccessibilityIcon} />
          <RenderText text={options[option as IAccessibilityIcon]!} />
        </div>
      ))}
    </>
  );

  if (link.length > 0) {
    return (
      <a
        aria-label={aria}
        className={classNames(className, styles.content, {
          [styles.smaller]: smaller,
        })}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={classNames(className, styles.content, {
        [styles.smaller]: smaller,
      })}
    >
      {content}
    </div>
  );
};
