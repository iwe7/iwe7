## [项目地址](https://github.com/iwe7/iwe7-design)
> 所有自定义组件，强制使用[iwe7-lazy-load](https://github.com/iwe7/iwe7-lazy-load)组件懒加载模块。

## 安装

```sh
yarn add iwe7-design
```

### 升级




## 使用

```ts
import { Iwe7DesignModule } from 'iwe7-design';

imports: [...Iwe7DesignModule.forRoot([])];
```

```html
<div class="container">
    <design-layout></design-layout>
</div>
```

## 开发自己组件

```
import {
  ElementRef
} from "@angular/core";
import { Iwe7DesignComponent, Iwe7DesignSettingComponent } from 'iwe7-design';

@Component({
  selector: "my-comp",
  template: `预览我的第一个组件`,
  styles: [``]
})
export class MyComp extends Iwe7DesignComponent{
    constructor(ele: ElementRef){
        super(ele)
    }
}
@Component({
  selector: "my-comp",
  template: `设置我的第一个组件`,
  styles: [``]
})
export class MyCompSetting Extends Iwe7DesignSettingComponent{
    constructor(ele: ElementRef){
        super(ele)
    }
}
```

## 添加到组件库

```
let design: Iwe7DesignConfig = {
  "my-comp": {
    title: "我的组件",
    name: "my-comp",
    show: true,
    setting: MyCompSetting,
    preview: MyComp,
    props: {
      name: "my-comp",
      style: {},
      class: {}
    }
  }
};

imports: [
    ...
    Iwe7DesignModule.forRoot([design])
]
```

## 总结

> 大 NG 实在强大, 一起来完善这个组件库吧！我最近会把微信小程序的一些组件加进来，欢迎关注！
