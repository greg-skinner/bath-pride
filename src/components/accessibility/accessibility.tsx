import * as React from 'react';

import { IAccessibilityIcon } from './accessibility.types';
import { AccessibilityIcon } from './accessibilityIcon';

import styles from './accessibility.module.scss';
import classNames from 'classnames';

export interface IAccessibilityProps {
  className?: string;
  options: Partial<{ [key in IAccessibilityIcon]: string }>;
  link: string;
  copy?: string;
}

export const Accessibility: React.FC<IAccessibilityProps> = ({
  className,
  options,
  link,
  copy,
}) => (
  <a
    className={classNames(className, styles.content)}
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    <div className={styles.header}>
      <div className={styles.title}>Accessibility</div>
      {Object.keys(options).length > 0 && (
        <div className={styles.subHead}>Summary</div>
      )}
      {link && <div className={styles.link}>Click for more details</div>}
    </div>
    <div className={styles.entry}>{copy}</div>
    {Object.keys(options).map((option) => (
      <div className={styles.entry} key={option}>
        <AccessibilityIcon icon={option as IAccessibilityIcon} />
        <span>{options[option as IAccessibilityIcon]}</span>
      </div>
    ))}
  </a>
);
