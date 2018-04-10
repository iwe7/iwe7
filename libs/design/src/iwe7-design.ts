import { Subject } from 'rxjs';
import { Input, ChangeDetectorRef, OnInit } from '@angular/core';
import { Iwe7Base } from 'iwe7/core';

export abstract class Iwe7DesignBase<T> extends Iwe7Base<T> implements OnInit {
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }
}
