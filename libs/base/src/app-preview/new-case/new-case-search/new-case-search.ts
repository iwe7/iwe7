import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-case-search',
  templateUrl: 'new-case-search.html',
  styleUrls: ['./new-case-search.scss']
})
export class NewCaseSearchComponent implements OnInit {
  keyword: string;
  constructor() {}
  ngOnInit() {}
}
