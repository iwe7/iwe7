import {
  Component,
  OnInit,
  ViewContainerRef,
  Input,
  Injector
} from '@angular/core';
import { from } from 'rxjs';
import { map, tap, takeLast } from 'rxjs/operators';
import { data } from 'iwe7/design-helper';

import { FieldRegisterService } from 'iwe7/form/src/field-register.service';
import { DesignForm } from 'iwe7/design';
@Component({
  selector: 'form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent extends DesignForm<any> implements OnInit {
  list: any[] = data['nz-rate'].fields;
  constructor(injector: Injector) {
    super(injector);
  }
  setViewRef(e: any) {
    this.props
      .pipe(
        // debug
        tap(res => console.log(res))
      )
      .subscribe(res => {
        e.clear();
        this.loader
          .load('nz-form', e, res, (evt: any) => {
            console.log(evt);
          })
          .subscribe();
      });
  }

  onPropsChange(e: any) {}
}
