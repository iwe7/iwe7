import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'components-page',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsPage implements OnInit {
  list: any[] = [
    {
      title: "表单套餐",
      autor: "imeepos",
      desc: "表单设计组件，包含5大表单元素",
      price: '300',
      unit: '永久'
    },
    {
      title: "视频组件",
      autor: "imeepos",
      desc: "视频播放",
      price: '10',
      unit: '永久'
    },
    {
      title: "轮播组件",
      autor: "imeepos",
      desc: "广告轮播",
      price: '10',
      unit: '永久'
    },
    {
      title: "布局容器",
      autor: "imeepos",
      desc: "布局容器",
      price: '10',
      unit: '永久'
    },
    {
      title: "语音组件",
      autor: "imeepos",
      desc: "语音组件",
      price: '10',
      unit: '永久'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
