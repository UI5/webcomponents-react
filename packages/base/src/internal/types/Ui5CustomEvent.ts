/**
 * ⚠️ __INTERNAL__ use only! This interface is not part of the public API.
 */
export interface Ui5CustomEvent<EventTarget = HTMLElement, Detail = never> extends Omit<
  CustomEvent<Detail>,
  'target' | 'currentTarget'
> {
  target: EventTarget;
  currentTarget: EventTarget | null;
}
