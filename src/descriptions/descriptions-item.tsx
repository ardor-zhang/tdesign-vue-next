import { defineComponent, inject } from 'vue';

import { LayoutEnum } from '../common';
import { useTNodeJSX, useContent } from '../hooks/tnode';
import { usePrefixClass } from '../hooks/useConfig';

import { descriptionsKey } from './interface';
import props from './description-item-props';

export default defineComponent({
  name: 'TDescriptionsItem',
  props,
  setup(props) {
    const descriptionsProps = inject(descriptionsKey);
    const COMPONENT_NAME = usePrefixClass('descriptions');
    const renderTNodeJSX = useTNodeJSX();
    const renderContent = useContent();

    const label = () => {
      const labelClass = [`${COMPONENT_NAME.value}__label`];
      const { span } = props;
      const labelSpan = descriptionsProps.itemLayout === LayoutEnum.HORIZONTAL ? 1 : span;
      const label = renderTNodeJSX('label');

      return (
        <td colspan={labelSpan} class={labelClass} {...{ style: descriptionsProps.labelStyle }}>
          {label}
          {descriptionsProps.colon && ':'}
        </td>
      );
    };

    const content = () => {
      const contentClass = [`${COMPONENT_NAME.value}__content`];
      const { span } = props;
      const contentSpan = span > 1 && descriptionsProps.itemLayout === LayoutEnum.HORIZONTAL ? span * 2 - 1 : span;
      const content = renderContent('content', 'default');

      return (
        <td colspan={contentSpan} class={contentClass} {...{ style: descriptionsProps.contentStyle }}>
          {content}
        </td>
      );
    };

    return () => (
      <>
        {label()}
        {content()}
      </>
    );
  },
});
