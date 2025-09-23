import type { ReactElement } from 'react';
import type { ReducedReactNode } from '../internal/types/index.js';

type InternalUI5WCSlotsNode =
  | ReducedReactNode
  | Iterable<ReducedReactNode>
  | false
  | ReactElement /* necessary for React v16 & v17 ReactNode type*/;

export type UI5WCSlotsNode = InternalUI5WCSlotsNode | InternalUI5WCSlotsNode[];
