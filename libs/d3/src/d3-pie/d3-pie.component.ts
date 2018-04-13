import { Component, OnInit, ElementRef } from '@angular/core';
import { select } from 'd3';
@Component({
  selector: 'd3-pie',
  templateUrl: './d3-pie.component.html',
  styleUrls: ['./d3-pie.component.scss']
})
export class D3PieComponent implements OnInit {
  constructor(public ele: ElementRef) {}

  ngOnInit() {
    let str = 'China';
    let body = select(this.ele.nativeElement);
    let p = body.selectAll('p');
    // 绑定数据
    p.datum(str);
    p.text(function(d, i) {
      return '第 ' + i + ' 个元素绑定的数据是 ' + d;
    });
  }
}
