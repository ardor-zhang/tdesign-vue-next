import type { InjectionKey, VNode } from 'vue';
import { Styles } from '../common';

export interface Item {
  updateStyle: (style: Styles) => void;
  span: number;
  min: number;
  max: number;
  index: number;
}

export interface TSplitInject {
  addItem: (item: Item) => void;
  draggerMousedown: (e: MouseEvent, index: number) => void;
  draggerMousemove: (e: MouseEvent, index: number) => void;
}

export const TSplitInjectKey: InjectionKey<TSplitInject> = Symbol('TSplitInject');
export const SplitItemIndex = Symbol('SplitItemIndex');
export type SplitVNode = VNode & { [SplitItemIndex]: number };
