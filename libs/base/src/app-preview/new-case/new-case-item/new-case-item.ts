import {
  Component,
  OnInit,
  Input,
  ElementRef,
  HostBinding
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'new-case-item',
  templateUrl: 'new-case-item.html',
  styleUrls: ['./new-case-item.scss']
})
export class NewCaseItemComponent implements OnInit {
  @Input() data: any;
  click$: Subject<any> = new Subject();
  @HostBinding('attr.id') id: string;
  constructor(public ele: ElementRef) {}
  ngOnInit() {
    fromEvent(this.ele.nativeElement, 'click')
      .pipe(map(res => this.data))
      .subscribe(this.click$);
  }
}
