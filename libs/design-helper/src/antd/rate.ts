export default {
  selector: 'nz-rate',
  props: {
    ngValue: 1,
    nzCount: 5,
    nzDefaultValue: 5,
    nzAllowHalf: false,
    nzDisabled: false
  },
  title: '评分',
  desc: '对评价进行展示。对事物进行快速的评级操作。',
  fields: [
    {
      name: 'nzValue',
      label: '默认值',
      type: 'number',
      value: 5
    },
    {
      name: 'nzCount',
      label: 'star总数',
      type: 'number',
      value: 5
    },
    {
      name: 'nzAllowHalf',
      label: '半选',
      type: 'boolean',
      value: false
    },
    {
      name: 'nzDisabled',
      label: '禁用',
      type: 'boolean',
      value: false
    }
  ]
};
