import type { ReactElement, ReactNode, ReactPortal } from 'react';
/**
 * ⚠️ __INTERNAL__ use only! This type is not part of the public API.
 */
export type ReducedReactNode = Exclude<ReactNode, string | number | boolean | ReactPortal | Iterable<ReactNode>>;
/**
 * ⚠️ __INTERNAL__ use only! This type is not part of the public API.
 */
export type ReducedReactNodeWithBoolean = Exclude<ReactNode, string | number | ReactPortal | Iterable<ReactNode>>;

type InternalUI5WCSlotsNode =
  | ReducedReactNode
  | Iterable<ReducedReactNode>
  | false
  | ReactElement /* necessary for React v16 & v17 ReactNode type*/;

/**
 * ⚠️ __INTERNAL__ use only! This type is not part of the public API.
 */
export type UI5WCSlotsNode = InternalUI5WCSlotsNode | InternalUI5WCSlotsNode[];

export type { CommonProps } from './CommonProps.js';
export type { Ui5CustomEvent } from './Ui5CustomEvent.js';
export type { Ui5DomRef } from './Ui5DomRef.js';
