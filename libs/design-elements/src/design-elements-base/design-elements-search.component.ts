import {
  DesignElementsList,
  DesignElementsListProps
} from './design-elements-list.component';
import { KeyValue } from 'iwe7/core';
export interface DesignElementsSearchProps extends DesignElementsListProps {
  // 搜索条件
  params: KeyValue;
}
export class DesignElementsSearch<
  T extends DesignElementsSearchProps
> extends DesignElementsList<T> {}
