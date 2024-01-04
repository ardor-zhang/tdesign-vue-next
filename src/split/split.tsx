import { defineComponent, computed, provide, VNode, Slots, ref, onMounted, reactive } from 'vue';

import { useChildComponentSlots } from '../hooks/slot';
import { usePrefixClass, useCommonClassName } from '../hooks/useConfig';
import { useTNodeJSX } from '../hooks/tnode';
import { Styles } from '../common';
import isNaN from 'lodash/isNaN';

import props from './props';
import { TSplitInjectKey, Item, SplitVNode, SplitItemIndex } from './interface';

export default defineComponent({
  name: 'TSplit',
  props,
  setup(props) {
    const COMPONENT_NAME = usePrefixClass('split');
    const getChildByName = useChildComponentSlots();

    const splitContainer = ref<HTMLElement>();
    const items = ref<Item[]>([]);

    const addItem = (item: Item) => {
      items.value[item.index] = item;
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

    const sumPrevItemsSpan = (index: number) => {
      return items.value.reduce((sum, item, i) => sum + (i < index - 1 ? item.span : 0), 0);
    };

    const sumNextItemsSpan = (index: number) => {
      return items.value.reduce((sum, item, i) => sum + (i > index ? item.span : 0), 0);
    };

    const reCalculateItemsSpan = (e: MouseEvent, index: number) => {
      const rect = splitContainer.value.getBoundingClientRect();
      const { clientX, clientY } = e;
      const x = clientX - rect.left;
      const p = (x * 100) / splitContainer.value.clientWidth;

      const prev = items.value[index - 1];
      prev.span = p - sumPrevItemsSpan(index);
      const next = items.value[index];
      next.span = 100 - p - sumNextItemsSpan(index);
    };

    const dragInfo = reactive({
      status: false,
    });

    const draggerMousedown = (e: MouseEvent, index: number) => {
      dragInfo.status = true;
    };

    const draggerMousemove = (e: MouseEvent, index: number) => {
      if (dragInfo.status) {
        reCalculateItemsSpan(e, index);
        updateItemStyle();
      }
    };

    onMounted(() => {
      calculateItemsSpan();
      updateItemStyle();
    });

    provide(TSplitInjectKey, { addItem, draggerMousedown, draggerMousemove });

    const renderChildren = () => {
      const children = getChildByName('TSplitItem') as SplitVNode[];
      // 给 children 添加 index
      children.forEach((child, index) => (child[SplitItemIndex] = index));
      return children;
    };

    return () => (
      <div class={COMPONENT_NAME.value} ref={splitContainer}>
        {renderChildren()}
      </div>
    );
  },
});
