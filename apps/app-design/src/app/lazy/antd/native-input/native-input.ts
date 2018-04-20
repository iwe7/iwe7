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
  selector: 'iwe7-native-input',
  templateUrl: './native-input.html',
  styleUrls: ['./native-input.scss']
})
export class NativeInputComponent {
  placeholder: string = '';
  step: string = '10';
  type: string = 'number';
  value: string = '';
  class: string = 'native-input';
  defaultChecked: boolean = false;
  defaultValue: string = '';
  title: string = '';
}
