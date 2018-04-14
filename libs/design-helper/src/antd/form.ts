export default {
  selector: 'nz-form',
  props: {
    nzLayout: 'horizontal'
  },
  title: 'Form 表单',
  desc:
    '具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。',
  fields: [
    {
      title: 'nzLayout',
      desc: '表单布局',
      type: 'selector',
      list: ['horizontal', 'vertical', 'inline'],
      default: 'horizontal'
    }
  ]
};
