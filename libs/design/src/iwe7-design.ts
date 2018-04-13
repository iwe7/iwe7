import { Subject } from 'rxjs';
import { Input, ChangeDetectorRef, OnInit } from '@angular/core';
import { Iwe7Base } from 'iwe7/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export abstract class Iwe7DesignBase<T> extends Iwe7Base<T> implements OnInit {
  selector: string;
  constructor(cd: ChangeDetectorRef) {
    super(cd);
  }
}

export abstract class Iwe7DesignSettingBase<T> extends Iwe7DesignBase<T> {
  form: FormGroup;
  formChange: Subject<any> = new Subject();
  constructor(cd: ChangeDetectorRef, public fb: FormBuilder) {
    super(cd);
    this.form = this.fb.group({});
    this.form.valueChanges.subscribe(res => {
      this.formChange.next(res);
    });
  }

  onPropsChange(res: T) {
    Object.keys(res).map(key => {
      if (!this.form.contains(key)) {
        this.form.addControl(key, this.fb.control(res[key]));
      }
    });
  }
}
