export default [
  {
    name: 'nzValue',
    type: 'number',
    value: 5,
    label: '默认值',
    placeholder: '请输入默认值',
    rules: {
      min: {
        limit: '0',
        msg: '最小值为0'
      }
    }
  },
  {
    name: 'nzCount',
    type: 'number',
    value: 5,
    label: 'star总数',
    placeholder: '请输入star总数'
  },
  {
    name: 'nzAllowHalf',
    type: 'boolean',
    value: false,
    label: '半选开关'
  },
  {
    name: 'nzDisabled',
    type: 'boolean',
    value: false,
    label: '禁用开关'
  }
];
