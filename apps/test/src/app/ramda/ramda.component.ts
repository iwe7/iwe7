import { Component, OnInit } from '@angular/core';
import {
  add,
  addIndex,
  map,
  all,
  equals,
  allPass,
  propEq,
  always,
  bind
} from 'ramda';
@Component({
  selector: 'ramda',
  templateUrl: './ramda.component.html',
  styleUrls: ['./ramda.component.scss']
})
export class RamdaComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.addIndex();
    this.all();
    let a = add(1)(2);
  }
  // 通过向列表迭代函数的回调函数添加两个新的参数：当前索引、整个列表，创建新的列表迭代函数。
  addIndex() {
    let _addIndex = addIndex(map);
    let a = _addIndex((val, idx) => `${idx}:${val}`, [1, 2, 3, 4, 5]);
  }

  all() {
    let a = all(equals(3))([1, 2, 3]);
    console.log(a);

    const isQueem = propEq('rank', 'Q');
    const isSpade = propEq('suit', '♠︎');
    const result = allPass([isQueem, isSpade])({
      rank: 'Q',
      suit: '♠︎'
    });
    console.log(result);

    const c = always('a');
    this.log(c());

    bind(console, console.log);
  }

  log(c) {
    console.log(c);
  }
}
