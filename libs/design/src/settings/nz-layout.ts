import { DesignAndPreviewProps } from './types';

const data: DesignAndPreviewProps[] = [
  {
    name: 'width',
    type: 'number',
    value: 100,
    label: '宽度',
    placeholder: '请输入宽度'
  },
  {
    name: 'height',
    type: 'number',
    value: 100,
    label: '高度',
    placeholder: '请输入高度'
  },
  {
    name: 'unit',
    type: 'select',
    value: 'px',
    label: '单位',
    placeholder: '请选择单位',
    options: ['px', 'em', '%', 'v']
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
    value: '#efefef',
    label: '背景色',
    placeholder: '请选择背景色'
  },
  {
    name: 'backgroundImage',
    type: 'image',
    value: '',
    label: '背景图片',
    placeholder: '请选择背景图片'
  }
];

export default data;
