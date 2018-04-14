// 内置
// > selector
// > props

export const _drop = {
  selector: 'design-drop-impl',
  style: {
    width: '800px',
    height: '800px',
    [`background-color`]: '#ccc',
    display: 'block',
    margin: '10px auto'
  },
  props: [
    {
      selector: 'sortable',
      props: [
        {
          selector: 'design-base-impl',
          style: {
            width: '100px',
            height: '100px',
            [`background-color`]: '#333',
            display: 'block'
          },
          callback: () => {}
        },
        {
          selector: 'design-base-impl',
          style: {
            width: '100px',
            height: '100px',
            [`background-color`]: '#000',
            display: 'block'
          },
          callback: () => {}
        },
        {
          selector: 'design-base-impl',
          style: {
            width: '100px',
            height: '100px',
            [`background-color`]: 'red',
            display: 'block'
          },
          callback: () => {}
        }
      ]
    }
  ]
};

export const _drag = {
  selector: 'design-drag-impl',
  style: {
    width: '100px',
    height: '100px',
    [`background-color`]: '#ccc',
    display: 'inline'
  },
  props: [
    {
      selector: 'design-base-impl',
      style: {
        width: '100px',
        height: '100px',
        [`background-color`]: '#333',
        display: 'block'
      },
      callback: () => {}
    }
  ]
};
