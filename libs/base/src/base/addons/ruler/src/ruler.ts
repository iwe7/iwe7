import { Component, OnInit, HostBinding } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap, debounceTime } from 'rxjs/operators';
// 联想及自动补齐

@Component({
  selector: 'ruler',
  templateUrl: './ruler.html',
  styleUrls: ['./ruler.scss']
})
export class RulerComponent implements OnInit {
  @HostBinding('attr.id') id: string;
  @HostBinding('attr.data-title') title: string;

  isVertical: boolean = false;
  constructor() {}

  ngOnInit() {}
}
