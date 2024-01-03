import { defineComponent, computed, provide, VNode, Slots } from 'vue';

import { useChildComponentSlots } from '../hooks/slot';
import { usePrefixClass, useCommonClassName } from '../hooks/useConfig';
import { useTNodeJSX } from '../hooks/tnode';

import props from './props';
import { TdSplitItemProps } from './type';

export default defineComponent({
  name: 'TSplit',
  props,
  setup(props) {
    const COMPONENT_NAME = usePrefixClass('split');
    const getChildByName = useChildComponentSlots();

    return () => <div class={COMPONENT_NAME.value}>{getChildByName('TSplitItem')}</div>;
  },
});
