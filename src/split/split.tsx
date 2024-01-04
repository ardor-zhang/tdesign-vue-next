import { defineComponent, computed, provide, VNode, Slots, ref, onMounted } from 'vue';

import { useChildComponentSlots } from '../hooks/slot';
import { usePrefixClass, useCommonClassName } from '../hooks/useConfig';
import { useTNodeJSX } from '../hooks/tnode';
import { Styles } from '../common';
import isNaN from 'lodash/isNaN';

import props from './props';
import { TSplitInjectKey, Item } from './interface';

export default defineComponent({
  name: 'TSplit',
  props,
  setup(props) {
    const COMPONENT_NAME = usePrefixClass('split');
    const getChildByName = useChildComponentSlots();
    const items = ref<Item[]>([]);

    const addItem = (item: Item) => {
      items.value.push(item);
    };

    const calculateItemsSpan = () => {
      // 1. 计算所有设置了 span 的 item 的 span 总和
      let countSetSpanItem = 0;
      const setSpans = items.value.reduce((prev, item) => {
        if (item.span !== Infinity) {
          countSetSpanItem++;
          return prev + item.span;
        }
        return prev;
      }, 0);

      // 2. 如果 setSpans 超过 100，那其它没设置的就不用管了，如果没有超过 100，那么剩下的 item 均分剩下的空间
      if (setSpans < 100) {
        const span = (100 - setSpans) / (items.value.length - countSetSpanItem);
        items.value.forEach((item) => {
          if (item.span === Infinity) {
            item.span = span;
          }
        });
      }
    };

    const updateItemStyle = () => {
      items.value.forEach((item) => item.updateStyle({ width: `${item.span}%` }));
    };

    onMounted(() => {
      calculateItemsSpan();
      updateItemStyle();
    });

    provide(TSplitInjectKey, { addItem });

    return () => <div class={COMPONENT_NAME.value}>{getChildByName('TSplitItem')}</div>;
  },
});
