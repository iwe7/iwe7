import { Component, OnInit } from "@angular/core";

@Component({
  selector: "addons-page",
  templateUrl: "./addons.component.html",
  styleUrls: ["./addons.component.scss"]
})
export class AddonsPage implements OnInit {
  list: any[] = [
    {
      title: "商城",
      autor: "imeepos",
      desc: "商城系统",
      price: '101',
      unit: '年'
    },
    {
      title: "订餐",
      autor: "imeepos",
      desc: "订餐系统",
      price: '102',
      unit: '年'
    },
    {
      title: "跑腿",
      autor: "imeepos",
      desc: "跑腿系统",
      price: '103',
      unit: '年'
    },
    {
      title: "cms",
      autor: "imeepos",
      desc: "官网cms",
      price: '104',
      unit: '年'
    },
    {
      title: "论坛",
      autor: "imeepos",
      desc: "论坛系统",
      price: '105',
      unit: '年'
    }
  ];
  config: any = {};
  constructor() {}

  ngOnInit() {}
}
