import {
  Directive
} from '@angular/core';

import { NzUpdateHostClassService } from 'iwe7/core';

import { NzColComponent } from './nz-col.component';

@Directive({
  selector : '[nz-col]',
  providers: [ NzUpdateHostClassService ]
})
export class NzColDirective extends NzColComponent {
}
