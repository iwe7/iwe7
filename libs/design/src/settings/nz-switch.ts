import { DesignAndPreviewProps } from './types';

const data: DesignAndPreviewProps[] = [
  {
    name: 'nzSize',
    label: '尺寸',
    value: 'default',
    type: 'select',
    options: ['default', 'small']
  },
  {
    name: 'nzLoading',
    label: '加载开关',
    value: false,
    type: 'boolean'
  },
  {
    name: 'nzDisabled',
    label: '禁用开关',
    value: false,
    type: 'boolean'
  }
];

export default data;
