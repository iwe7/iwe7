import {
  DesignList,
  DesignListProps
} from './design-list';
import { KeyValue } from 'iwe7/core';
export interface DesignSearchProps extends DesignListProps {
  // 搜索条件
  params: KeyValue;
}
export class DesignSearch<
  T extends DesignSearchProps
> extends DesignList<T> {}
