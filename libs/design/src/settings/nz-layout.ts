import { DesignAndPreviewProps } from './types';

const data: DesignAndPreviewProps[] = [
  {
    name: 'width',
    type: 'number',
    value: 100,
    label: '宽度(%)',
    placeholder: '请输入宽度'
  },
  {
    name: 'height',
    type: 'number',
    value: 100,
    label: '高度(%)',
    placeholder: '请输入高度'
  },
  {
    name: 'allowScroll',
    type: 'boolean',
    value: true,
    label: '允许滚动'
  },
  {
    name: 'backgroundColor',
    type: 'color',
    value: '#dddddd',
    label: '',
    placeholder: '请选择背景色'
  },
  {
    name: 'props',
    type: 'elements',
    value: '',
    label: '',
    options: ['nz-header', 'nz-footer', 'nz-body', 'nz-slider']
  }
];

export default data;
