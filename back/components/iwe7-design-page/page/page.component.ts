import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() props: any;

  constructor(
    public ele: ElementRef
  ) { }

  ngOnInit() {}

}
