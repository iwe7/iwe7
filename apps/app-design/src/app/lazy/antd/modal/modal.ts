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
  selector: 'iwe7-modal',
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss']
})
export class ModalComponent implements OnInit {
  isVisible: boolean = true;
  ngOnInit() {}
  handleCancel() {
    this.isVisible = false;
  }
  handleOk() {
    this.isVisible = false;
  }
}
