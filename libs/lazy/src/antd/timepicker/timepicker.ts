import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  EventEmitter,
  HostBinding,
  ElementRef,
  ViewEncapsulation,
  Input
} from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';
import { IcssService } from 'iwe7-icss';
@Component({
  selector: 'iwe7-timepicker',
  templateUrl: './timepicker.html',
  styleUrls: ['./timepicker.scss']
})
export class TimepickerComponent implements OnInit {
  ngOnInit() {}
}
