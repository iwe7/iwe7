export default {
  selector: 'nz-input',
  props: {
    nzAutosize: false,
    nzSize: 'default',
    type: 'text',
    disabled: false,
    placeholder: '请输入'
  },
  title: '输入框',
  desc: '文本输入',
  fields: [
    {
      title: 'nzAutosize',
      desc:
        '只可以用于 textarea，自适应内容高度，可设置为 boolean 或对象：{ minRows: 2, maxRows: 6 }',
      type: 'boolean|object',
      default: ''
    },
    {
      title: 'nzSize',
      desc:
        '控件大小。注：标准表单内的输入框大小限制为 large。可选 large default small',
      type: 'selector',
      list: ['large', 'default', 'small'],
      default: 'default'
    },
    {
      title: 'type',
      desc: '文本类型',
      type: 'selector',
      list: [],
      default: 'text'
    },
    {
      title: 'disabled',
      desc: '是否禁用',
      type: 'boolean',
      default: false
    },
    {
      title: 'placeholder',
      desc: '输入提醒',
      type: 'string',
      default: '请输入'
    }
  ]
};
