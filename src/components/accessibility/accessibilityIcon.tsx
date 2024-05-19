import * as React from 'react';

import { IAccessibilityIcon } from './accessibility.types';

import styles from './accessibility.module.scss';
import classNames from 'classnames';

export interface IAccessibilityIconProps {
  icon: IAccessibilityIcon;
}

export const AccessibilityIcon: React.FC<IAccessibilityIconProps> = ({
  icon,
}) => (
  <img
    className={classNames(styles.icon, {
      [styles.parking]: icon === 'parking',
    })}
    src={`${APP_CONFIG.BASE_URL}icons/${
      icon === 'assistance-dogs' ? 'assistance-dogs.png' : `${icon}.svg`
    }`}
    alt={icon
      .split('-')
      .map((part) => part[0].toUpperCase() + part.slice(1))
      .join(' ')}
  />
);
