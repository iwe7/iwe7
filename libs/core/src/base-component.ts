// 给予rxjs设计的组件
import { Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

export class BaseComponent<T> implements OnChanges {
  @Input() props: Observable<T> = new Observable();
  constructor(
    private cd: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if ('props' in changes) {
      this.__propsHandler();
    }
  }

  private __propsHandler() {
    if(this.props.subscribe){
      return Error('props is not a Observable');
    }
    this.props.subscribe((res: T) => {
      console.log(res);
    });
  }
}
