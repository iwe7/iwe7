### 拖拽排序

> 依赖
```ts
import { DesignBase, DesignBaseProps } from 'iwe7/design';
import { IcssService } from 'iwe7/icss';
import { LazyLoaderService } from 'iwe7/lazy-load';
```

- services
```ts
let ele = {
  selector: 'sortable',
  props: []
};
[1, 2, 3, 4, 5, 6, 7, 8, 9].map(res => {
  let opt: any = {
    selector: 'design-base-impl',
    style: {
      width: '100px',
      height: '100px',
      [`text-align`]: 'center',
      [`line-height`]: '100px',
      [`background-color`]: this.colors.getRandomColor(),
      color: '#fff'
    },
    text: res + ''
  };
  ele.props.push(opt);
});
this.load
  .load('sortable', e, ele, evt => {
    if (evt.type === 'onFinish') {
      ele.props = evt.data;
      // 排序后的完整数据
    }
  })
  .subscribe();
```

- component

```html
<sortable [props]="props"></srotable>
```

- directive
```html
<div srotable [props]="props"></div>
```
