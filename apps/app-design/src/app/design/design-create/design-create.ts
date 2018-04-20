import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'design-create',
  templateUrl: './design-create.html',
  styleUrls: ['./design-create.scss']
})
export class DesignCreateComponent implements OnInit {
  selector: string;
  inputs: any;
  outputs: any[];
  children: any;
  constructor() {}
  ngOnInit() {
    console.log(this);
  }
}
