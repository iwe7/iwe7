import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'iwe7-radio',
  templateUrl: './radio.html',
  styleUrls: ['./radio.scss']
})
export class RadioComponent implements OnInit {
  change$: Subject<any> = new Subject();
  value: any = {
    type: 'string',
    value: ''
  };

  isButton: any = {
    type: 'boolean',
    value: false
  };

  options: any = {
    type: 'list',
    value: []
  };
  constructor() {}

  ngOnInit() {}

  modelChange() {
    this.change$.next(this.value.value);
  }
}
