import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[getViewRef]',
  exportAs: 'getViewRef'
})
export class GetViewRefDirective {

  constructor(
    public view: ViewContainerRef
  ) { }

}
