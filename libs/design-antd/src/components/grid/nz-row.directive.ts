import {
  Directive
} from '@angular/core';

import { NzUpdateHostClassService } from 'iwe7/core';

import { NzRowComponent } from './nz-row.component';

@Directive({
  selector : '[nz-row]',
  providers: [ NzUpdateHostClassService ]
})
export class NzRowDirective extends NzRowComponent {
}
