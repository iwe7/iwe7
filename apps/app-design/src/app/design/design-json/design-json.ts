import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'design-json',
  templateUrl: './design-json.html',
  styleUrls: ['./design-json.scss']
})
export class DesignJsonComponent implements OnInit {
  selector: string;
  inputs: any;
  outputs: any[];
  children: any;
  constructor() {}
  ngOnInit() {}
}
