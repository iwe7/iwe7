import {
  Component,
  OnInit,
  HostBinding,
  ElementRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { LokiPageDataService, MeepoRender } from 'iwe7/render';
import { Subject } from 'rxjs';
import { map, tap, debounceTime } from 'rxjs/operators';
import { NzMessageService } from 'iwe7/antd/message';
import { FormGroup, FormBuilder } from '@angular/forms';
// 联想及自动补齐

@Component({
  selector: 'create-element',
  templateUrl: './create-element.html',
  styleUrls: ['./create-element.scss']
})
export class CreateElementPage implements OnInit {
  @HostBinding('attr.id') id: string;
  @HostBinding('attr.data-title') title: string;

  constructor(
    public element: LokiPageDataService,
    public render: MeepoRender,
    public message: NzMessageService,
    public fb: FormBuilder
  ) {}

  ngOnInit() {}
}
