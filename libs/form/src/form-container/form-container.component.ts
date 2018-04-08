import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import { FieldRegisterService } from 'iwe7/form/src/field-register.service';

@Component({
  selector: 'form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {
  @Input() list: any[] = [];
  constructor() {}
  ngOnInit() {}
}
