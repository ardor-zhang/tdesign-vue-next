import type { InjectionKey } from 'vue';
import { Styles } from '../common';

export interface Item {
  updateStyle: (style: Styles) => void;
  span: number;
  min: number;
  max: number;
}

export interface TSplitInject {
  addItem: (item: Item) => void;
}

export const TSplitInjectKey: InjectionKey<TSplitInject> = Symbol('TSplitInject');
