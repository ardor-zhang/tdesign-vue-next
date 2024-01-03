import _Split from './split';
import _SplitItem from './split-item';
import withInstall from '../utils/withInstall';
import { TdSplitProps, TdSplitItemProps } from './type';

import './style';

export * from './type';
export type SplitProps = TdSplitProps;
export type SplitItemProps = TdSplitItemProps;

export const Split = withInstall(_Split);
export const SplitItem = withInstall(_SplitItem);
export default Split;
