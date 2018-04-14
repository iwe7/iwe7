export default {
  selector: 'nz-input-number',
  props: {
    ngModel: '',
    nzPlaceHolder: '请输入',
    nzMin: 0,
    nzMax: 100,
    nzStep: 1,
    nzDisabled: false,
    nzSize: 'small',
    nzAllowClear: true,
    style: {
      width: '60%',
      [`margin-right`]: '8px'
    }
  },
  title: '评分',
  desc: '对评价进行展示。对事物进行快速的评级操作。',
  fields: [
    {
      title: 'ngModel',
      label: '当前值，可双向绑定',
      type: 'number',
      default: ''
    },
    {
      title: 'nzPlaceHolder',
      label: 'placeholder',
      type: 'string',
      default: ''
    },
    {
      title: 'nzMin',
      label: '最小值',
      type: 'number',
      default: ''
    },
    {
      title: 'nzMax',
      label: '最大值',
      type: 'number',
      default: ''
    },
    {
      title: 'nzStep',
      label: '每次改变步数，可以为小数',
      type: 'number',
      default: 1
    },
    {
      title: 'nzDisabled',
      label: '禁用',
      type: 'boolean',
      default: false
    },
    {
      title: 'nzSize',
      label: '输入框大小',
      type: 'size',
      default: false
    },
    {
      title: 'nzBlur',
      label: '失去焦点回调',
      type: 'event',
      default: () => {}
    },
    {
      title: 'nzFocus',
      label: '获取焦点回调',
      type: 'event',
      default: () => {}
    },
    {
      title: 'nzFormatter',
      label: '指定输入框展示值的格式',
      type: 'function',
      default: () => {}
    },
    {
      title: 'nzParser',
      label: '指定从 nzFormatter 里转换回数字的方式，和 nzFormatter 搭配使用',
      type: 'function',
      default: () => {}
    },
    {
      title: 'nzAllowClear',
      label: '是否允许清空input number中的数值',
      type: 'boolean',
      default: false
    }
  ]
};
