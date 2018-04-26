import { Component, OnInit, HostBinding } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap, debounceTime } from 'rxjs/operators';
// 联想及自动补齐

@Component({
  selector: 'create-element',
  templateUrl: './create-element.html',
  styleUrls: ['./create-element.scss']
})
export class CreateElementPage implements OnInit {
  @HostBinding('attr.id') id: string;
  @HostBinding('attr.data-title') title: string;

  constructor() {}

  ngOnInit() {}
}
