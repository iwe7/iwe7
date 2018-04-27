import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  EventEmitter,
  HostBinding,
  ElementRef,
  ViewEncapsulation,
  Input,
  OnChanges
} from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';
import { IcssService } from 'iwe7-icss';

@Component({
  selector: 'nz-span',
  template: `{{text.value}}`,
  styleUrls: ['./span.scss']
})
export class SpanComponent implements OnInit {
  text: any = {
    type: 'string',
    value: 'span'
  };
  ngOnInit() {}
}
