import type I18nBundle from '@ui5/webcomponents-base/dist/i18nBundle.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import iconAlert from '@ui5/webcomponents-icons/dist/alert.js';
import iconError from '@ui5/webcomponents-icons/dist/error.js';
import iconInformation from '@ui5/webcomponents-icons/dist/information.js';
import iconSysEnter from '@ui5/webcomponents-icons/dist/sys-enter-2.js';
import { isValidElement } from 'react';
import type { ReactNode } from 'react';
import { ERROR, WARNING, SUCCESS, INFORMATION } from '../../i18n/i18n-defaults.js';
import type { LinkPropTypes } from '../../webComponents/Link/index.js';

export const getIconNameForType = (type: ValueState | keyof typeof ValueState): string => {
  switch (type) {
    case ValueState.Negative:
    case 'Negative':
      return iconError;
    case ValueState.Positive:
    case 'Positive':
      return iconSysEnter;
    case ValueState.Critical:
    case 'Critical':
      return iconAlert;
    default:
      return iconInformation;
  }
};

export const getValueStateMap = (i18nBundle: I18nBundle) => ({
  [ValueState.Negative]: i18nBundle.getText(ERROR),
  [ValueState.Critical]: i18nBundle.getText(WARNING),
  [ValueState.Positive]: i18nBundle.getText(SUCCESS),
  [ValueState.Information]: i18nBundle.getText(INFORMATION),
  [ValueState.None]: i18nBundle.getText(INFORMATION),
});

export const resolveTitleTextStr = (titleText: ReactNode): string => {
  if (typeof titleText === 'string' || typeof titleText === 'number') {
    return String(titleText);
  }
  if (isValidElement<LinkPropTypes>(titleText)) {
    const linkChild = titleText.props.children;
    if (typeof linkChild === 'string' || typeof linkChild === 'number') {
      return String(linkChild);
    }
  }
  return '';
};
