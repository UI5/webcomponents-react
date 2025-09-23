import type { ReactNode, ReactPortal } from 'react';
/**
 * ⚠️ __INTERNAL__ use only! This type is not part of the public API.
 */
export type ReducedReactNode = Exclude<ReactNode, string | number | boolean | ReactPortal | Iterable<ReactNode>>;
/**
 * ⚠️ __INTERNAL__ use only! This type is not part of the public API.
 */
export type ReducedReactNodeWithBoolean = Exclude<ReactNode, string | number | ReactPortal | Iterable<ReactNode>>;

export type { CommonProps } from './CommonProps.js';
export type { Ui5CustomEvent } from './Ui5CustomEvent.js';
export type { Ui5DomRef } from './Ui5DomRef.js';
