import {
  Component,
  OnInit,
  TemplateRef,
  Input,
  ViewContainerRef,
  ViewChild,
  AfterViewInit,
  ElementRef,
  HostBinding
} from '@angular/core';
import { Iwe7InputComponent } from '../input/input';
@Component({
  selector: 'iwe7-textarea',
  templateUrl: 'textarea.html'
})
export class Iwe7TextareaComponent extends Iwe7InputComponent
  implements OnInit, AfterViewInit {
  constructor() {
    super();
  }
}
