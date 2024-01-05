import isArray from 'lodash/isArray';
import { defineComponent, computed, provide } from 'vue';

import { LayoutEnum } from '../common';
import { useTNodeJSX } from '../hooks/tnode';
import { useChildComponentSlots } from '../hooks/slot';
import { usePrefixClass, useCommonClassName } from '../hooks/useConfig';

import props from './props';
import { descriptionsKey } from './interface';
import DescriptionsRow from './descriptions-row';
import { renderCustomNode, renderVNodeTNode } from './utils';
import { TdDescriptionsProps, TdDescriptionItemProps } from './type';

/**
 * 实现思路
 * 1. 基于 table tbody tr td 来实现布局
 * 2. 通过 span 计算总共有几行以及每一行的 item 个数，特别注意最后一行，要填充满
 * 3. 整体布局：左右布局（column 和 span 生效）/上下布局（column 和 span 失效，一行一个 item）
 * 4. item 布局：左右布局/上下布局
 */

/**
 * TDescriptions：承载 header（title） 和 body（table, tbody）
 * TDescriptionsRow：承载每一行（tr）
 * TDescriptionsItem：获取 item 数据（span, label, content）
 */

export default defineComponent({
  name: 'TDescriptions',
  props,
  setup(props: TdDescriptionsProps) {
    const COMPONENT_NAME = usePrefixClass('descriptions');
    const { SIZE } = useCommonClassName();
    const getChildByName = useChildComponentSlots();
    const renderTNodeJSX = useTNodeJSX();
    // 计算渲染的行内容
    const rows = computed(() => {
      /**
       * 1. 两种方式获取要渲染的 items
       *  a. props 传 items
       *  b. slots t-descriptions-item
       * a 优先级更高
       */
      const { column, layout } = props;

      let items: TdDescriptionItemProps[] = [];

      if (isArray(props.items)) {
        /**
         * 2.1 a 方式获取 items
         * ! 这里要支持 label: string / <div></div> / () =>  <div></div>
         * ! 暂时没有这样一个全局的方法，所以先在组件内部写一个临时方法，无论之后是有了更好的处理方式要删除掉，还是其它组件也需要时再放到公共方法里面，都是可行的
         */
        items = props.items.map((item) => ({
          label: renderCustomNode(item.label),
          content: renderCustomNode(item.content),
          span: item.span || 1,
        }));
      } else {
        const slots = getChildByName('TDescriptionsItem');
        if (slots.length !== 0) {
          // 2.2 b 方式 获取 TDescriptionsItem
          items = slots.map((item) => {
            const { span = 1 } = item.props || {};
            return {
              label: renderVNodeTNode(item, 'label'),
              content: renderVNodeTNode(item, 'content', 'default'),
              span,
            };
          });
        }
      }

      // 2. 判断布局，如果整体布局为 LayoutEnum.VERTICAL，那么直接返回即可。
      if (layout === LayoutEnum.VERTICAL) {
        return [items];
      }

      // 3. 布局为 LayoutEnum.HORIZONTAL 时，需要计算每一行的 item 个数
      let temp: TdDescriptionItemProps[] = [];
      let reset = column;

      // 4. 记录结果
      const res: TdDescriptionItemProps[][] = [];
      items.forEach((item, index) => {
        const { span } = item;
        if (reset >= span) {
          // 当前行还剩余空间
          temp.push(item);
          reset -= span;
        } else {
          // 当前行放不下了，放下一行
          res.push(temp);
          temp = [item];
          reset = column - span;
        }

        if (index === items.length - 1) {
          // 最后一个
          item.span += reset;
          res.push(temp);
        }
      });
      return res;
    });

    provide(descriptionsKey, props);

    const renderBody = () => {
      const tableClass = [
        `${COMPONENT_NAME.value}__body`,
        SIZE.value[props.size],
        { [`${COMPONENT_NAME.value}__body--border`]: props.bordered },
      ];
      return (
        <table class={tableClass}>
          <tbody>
            {rows.value.map((row) => (
              <DescriptionsRow row={row} />
            ))}
          </tbody>
        </table>
      );
    };

    const renderHeader = () => {
      const title = renderTNodeJSX('title');
      return title ? <div class={`${COMPONENT_NAME.value}__header`}>{title}</div> : '';
    };

    return () => (
      <div class={COMPONENT_NAME.value}>
        {renderHeader()}
        {renderBody()}
      </div>
    );
  },
});