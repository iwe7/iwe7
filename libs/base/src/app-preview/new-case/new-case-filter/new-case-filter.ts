import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-case-filter',
  templateUrl: 'new-case-filter.html',
  styleUrls: ['./new-case-filter.scss']
})
export class NewCaseFilterComponent implements OnInit {
  keyword: string;
  constructor() {}
  ngOnInit() {}
}
