import * as Device from './Device/index.js';
import VersionInfo from './generated/VersionInfo.js';
import * as hooks from './hooks/index.js';
import { I18nStore } from './internal/stores/I18nStore.js';
import { StyleStore } from './internal/stores/StyleStore.js';
import { withWebComponent } from './internal/wrapper/withWebComponent.js';
import type { WithWebComponentPropTypes } from './internal/wrapper/withWebComponent.js';
import { ThemingParameters } from './styling/ThemingParameters.js';

export * from './internal/styling/CssSizeVariables.js';
export * from './internal/utils/index.js';
export * from './hooks/index.js';
export * from './internal/hooks/index.js';
export type * from './internal/types/index.js';
export type * from './types/index.js';

export { I18nStore, StyleStore, ThemingParameters, Device, hooks, withWebComponent };
export type { WithWebComponentPropTypes };
export const version = VersionInfo.version;
