import type { PlainObject } from 'packages/types/common';

/** Vue3 特有全局类型 */
type VNode = import('vue').VNode;
export type ScopedSlot = () => SlotReturnValue;
export type SlotReturnValue = VNode | string | boolean | null | undefined | SlotReturnArray;
export type SlotReturnArray = Array<SlotReturnValue>;
export interface TVNode extends VNode {
  name: string;
}
export type TNodeReturnValue = SlotReturnValue;

// 严格执行是否有参数，不允许出现 props?:T
export type TNode<T = undefined> = T extends undefined
  ? (h: typeof import('vue').h) => TNodeReturnValue
  : (h: typeof import('vue').h, props: T) => TNodeReturnValue;
export interface UploadDisplayDragEvents {
  onDrop?: (event: DragEvent) => void;
  onDragenter?: (event: DragEvent) => void;
  onDragover?: (event: DragEvent) => void;
  onDragleave?: (event: DragEvent) => void;
}

export type ImageEvent = Event;

export type TreeOptionData<T = string | number> = {
  children?: Array<TreeOptionData<T>> | boolean;
  /** option label content */
  label?: string | TNode;
  /** option search text */
  text?: string;
  /** option value */
  value?: T;
  /** option node content */
  content?: string | TNode;
} & PlainObject;
