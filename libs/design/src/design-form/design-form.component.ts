import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'design-form',
  templateUrl: './design-form.component.html',
  styleUrls: ['./design-form.component.scss']
})
export class DesignFormComponent implements OnInit {
  @Input() props: BehaviorSubject<any> = new BehaviorSubject({});
  constructor() {}

  ngOnInit() {}
}
