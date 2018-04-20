import {
  Directive,
  ViewContainerRef,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';

@Directive({ selector: '[getView]' })
export class GetViewDirective implements OnInit {
  @Output() getView: EventEmitter<any> = new EventEmitter();
  constructor(public view: ViewContainerRef) {}

  ngOnInit() {
    this.getView.emit(this.view);
  }
}
