import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-page',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplatePage implements OnInit {
  list: any[] = [
    {
      title: "活动报名",
      autor: "imeepos",
      desc: "活动报名",
      price: '300',
      unit: '永久'
    },
    {
      title: "婚礼报名",
      autor: "imeepos",
      desc: "婚礼报名",
      price: '10',
      unit: '永久'
    },
    {
      title: "砍价单页",
      autor: "imeepos",
      desc: "砍价单页",
      price: '10',
      unit: '永久'
    },
    {
      title: "新品发布",
      autor: "imeepos",
      desc: "新品发布",
      price: '10',
      unit: '永久'
    },
    {
      title: "问卷调查",
      autor: "imeepos",
      desc: "问卷调查",
      price: '10',
      unit: '永久'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
