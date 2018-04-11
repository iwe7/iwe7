import {
  Directive,
  ViewContainerRef,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[getViewRef]',
  exportAs: 'getViewRef'
})
export class GetViewRefDirective implements OnInit {
  @Output() getViewRef: EventEmitter<ViewContainerRef> = new EventEmitter();
  constructor(public view: ViewContainerRef) {}

  ngOnInit() {
    this.getViewRef.emit(this.view);
  }
}
