import {
  DesignElementsBase,
  DesignElementsBaseProps
} from './design-elements-base.component';
export interface DesignElementsListProps extends DesignElementsBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignElementsList<T extends DesignElementsListProps> extends DesignElementsBase<T> {}
