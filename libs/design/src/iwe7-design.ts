import { Subject } from 'rxjs';
import { Input } from '@angular/core';
export abstract class Iwe7Design {
  @Input() props: Subject<any> = new Subject();

  setProps(props: Subject<any>) {}
}
