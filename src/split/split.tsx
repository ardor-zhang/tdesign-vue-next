import { defineComponent, computed, provide, VNode, Slots } from 'vue';

import { useChildComponentSlots } from '../hooks/slot';
import { usePrefixClass, useCommonClassName } from '../hooks/useConfig';
import { useTNodeJSX } from '../hooks/tnode';
import { Styles } from '../common';

import props from './props';
import { TSplitInjectKey, AddItemArg } from './interface';

export default defineComponent({
  name: 'TSplit',
  props,
  setup(props) {
    const COMPONENT_NAME = usePrefixClass('split');
    const getChildByName = useChildComponentSlots();

    const addItem = (item: AddItemArg) => {
      item.updateStyle({ with: '20%' });
    };

    provide(TSplitInjectKey, { addItem });

    return () => <div class={COMPONENT_NAME.value}>{getChildByName('TSplitItem')}</div>;
  },
});
