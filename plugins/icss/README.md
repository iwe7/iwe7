### angular当css遇到rxjs
> 这是一个神奇的想法，用流控制样式。

## 安装
```ts
yarn add iwe7-icss
```

![Alt text](https://github.com/iwe7/iwe7/blob/master/libs/icss/docs/QQ20180410-000015-HD.gif)

## 使用
```ts
import { IcssService, IcssInterface } from 'iwe7-css';

// cube颜色控制器
cubeColorCtrl$: Subject<{ color: string; bg: string }> = new Subject();
@ViewChild('cube') cube: ElementRef;
constructor(public icss: IcssService, public ele: ElementRef){}

ngOnInit(){
  this.icss.init(
    {
      cube: this.cubeColorCtrl$
    },
    this.cube
  );
  setInterval(() => {
    this.cubeColorCtrl$.next({
      color: '#fff',
      bg: this.randomHexColor()
    });
  },100);
}

randomHexColor(): string {
  return `#${(
    '00000' + ((Math.random() * 0x1000000) << 0).toString(16)
  ).substr(-6)}`;
}
```

```html
<div class="cube"></div>
```

```scss
.cube{
  background: var(--cube-bg);
  color: var(--cube-color);
  width: 100px;
  height: 100px;
}
```
