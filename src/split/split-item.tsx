import { defineComponent } from 'vue';
import props from './props';
import { useContent } from '../hooks/tnode';
import { usePrefixClass, useCommonClassName } from '../hooks/useConfig';

export default defineComponent({
  name: 'TSplitItem',
  props,
  setup() {
    const COMPONENT_NAME = usePrefixClass('split');
    const renderContent = useContent();

    return () => <div class={`${COMPONENT_NAME.value}__item`}>{renderContent('content', 'default')}</div>;
  },
});
