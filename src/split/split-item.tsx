import { defineComponent, getCurrentInstance, inject, onMounted, ref } from 'vue';
import props from './split-item-props';
import { useContent } from '../hooks/tnode';
import { usePrefixClass } from '../hooks/useConfig';
import setStyle from '../_common/js/utils/set-style';
import { Styles } from '../common';
import { TdSplitItemProps } from './type';
import isNaN from 'lodash/isNaN';
import { TSplitInjectKey, Item, SplitVNode, SplitItemIndex } from './interface';

/**
 * @实现思路
 * 1. 在其左侧或上侧要附加一个可拖拽的 bar（可传入 isFirst 来判断是否展示）
 * 2. onMounted 后将 item（props/更新方法） 进行汇总，汇总数据拿到所有的 item，便可以进行计算，然后进行相应的更新
 * 3. 拖动时，汇总数据进行计算然后更新即可，此组件不需要太多的关注
 */

export default defineComponent({
  name: 'TSplitItem',
  props,
  setup(props: TdSplitItemProps) {
    const COMPONENT_NAME = usePrefixClass('split');
    const renderContent = useContent();
    const itemRef = ref<HTMLElement>();
    const { vnode } = getCurrentInstance();

    const splitInject = inject(TSplitInjectKey);

    const updateStyle = (style: Styles) => {
      setStyle(itemRef.value, style);
    };

    const handleMousedown = (e: MouseEvent) => splitInject.draggerMousedown(e, vnode[SplitItemIndex]);

    const handleMousemove = (e: MouseEvent) => splitInject.draggerMousemove(e, vnode[SplitItemIndex]);

    onMounted(() => {
      const { span, min, max } = props;
      splitInject.addItem({
        updateStyle,
        span: !span || isNaN(span) ? Infinity : span,
        max,
        min,
        index: vnode[SplitItemIndex],
      });
    });

    return () => {
      return (
        <>
          <div
            class={`${COMPONENT_NAME.value}__dragger`}
            onMousedown={handleMousedown}
            onMousemove={handleMousemove}
          ></div>
          <div class={`${COMPONENT_NAME.value}__item`} ref={itemRef}>
            {renderContent('content', 'default')}
          </div>
        </>
      );
    };
  },
});
