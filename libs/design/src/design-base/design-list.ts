import {
  DesignBase,
  DesignBaseProps
} from './design-base';
export interface DesignListProps extends DesignBaseProps {
  url: string;
  page: number;
  psize: number;
}
export class DesignList<T extends DesignListProps> extends DesignBase<T> {}
