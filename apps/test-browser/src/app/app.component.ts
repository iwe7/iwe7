import {
  Component,
  OnInit,
  NgModuleRef,
  AfterContentInit
} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  index: number = 0;
  constructor(public router: Router) {}
  ngOnInit() {
    setInterval(() => {
      this.index++;
    }, 1000);
  }
  ngAfterContentInit() {
    setTimeout(() => {
      let meepo = window['meepo'];
      let injector = meepo.injector;
      let router = injector.get(Router);
      console.log(router);
      router.navigate(['/page2']);
    }, 100);
  }
}
