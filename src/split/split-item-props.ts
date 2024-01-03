/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdSplitItemProps } from './type';
import { PropType } from 'vue';

export default {
  span: {
    type: [String, Number] as PropType<TdSplitItemProps['span']>,
  },
  max: {
    type: [String, Number] as PropType<TdSplitItemProps['min']>,
    default: 100,
  },
  min: {
    type: [String, Number] as PropType<TdSplitItemProps['max']>,
    default: 0,
  },
};
