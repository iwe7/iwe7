import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from './data/data';
import { MapPipe } from 'iwe7/pipes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: any = data;
  constructor(public router: Router, public map: MapPipe) {}

  ngOnInit() {
    let items = this.map.transform(this.items);
    console.log(items);
  }

  go(item: any, key: string) {
    this.router.navigate(['/'], {
      queryParams: {
        t: key
      }
    });
  }
}
