export const page = {
  title: '测试页面',
  props: [
    {
      selector: 'nz-button',
      text: 'dashed',
      nzType: 'dashed',
      props: [
        {
          selector: 'nz-icon'
        }
      ]
    },
    {
      selector: 'nz-button',
      text: 'default',
      nzType: 'default',
      props: [
        {
          selector: 'nz-icon'
        }
      ]
    },
    {
      selector: 'nz-button',
      text: 'primary',
      nzType: 'primary',
      props: {
        selector: 'nz-icon'
      }
    },
    {
      selector: 'nz-button',
      text: 'danger',
      nzType: 'danger',
      props: {
        selector: 'nz-icon'
      }
    }
  ]
};
