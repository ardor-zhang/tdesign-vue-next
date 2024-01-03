import type { InjectionKey } from 'vue';
import { Styles } from '../common';

export interface AddItemArg {
  updateStyle: (style: Styles) => void;
  span: number | string;
  min: number | string;
  max: number | string;
}

interface AddItem {
  (arg: AddItemArg): void;
}

export interface TSplitInject {
  addItem: AddItem;
}

export const TSplitInjectKey: InjectionKey<TSplitInject> = Symbol('TSplitInject');
