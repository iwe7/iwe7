export default {
  selector: 'nz-form',
  props: {
    nzHasFeedback: '',
    nzValidateStatus: '',
    nzSpan: '20'
  },
  title: 'Form 表单',
  desc:
    '具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。',
  fields: [
    {
      title: 'nzHasFeedback',
      desc:
        '当添加该属性时，配合 nzValidateStatus 属性使用，展示校验状态图标，建议只配合 nz-input 组件使用',
      type: 'string',
      default: ''
    },
    {
      title: 'nzValidateStatus',
      desc: `校验状态，当定义为 NgControl 时可以根据异步返回数据自动显示，也可手动定义为string 可选：'success' 'warning' 'error' 'validating'`,
      type: 'selector',
      list: ['success', 'warning', 'error', 'validating'],
      default: ''
    }
  ]
};
