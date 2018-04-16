import { Component, OnInit, Injector } from '@angular/core';
import { DesignBase } from 'iwe7/design';
import { ColorsService } from 'iwe7/themes/src/colors.service';
@Component({
  selector: 'nz-colors',
  templateUrl: './colors.html'
})
export class NzColorsComponent extends DesignBase<any> implements OnInit {
  colors: any;
  constructor(injector: Injector) {
    super(injector);
    this.colors = this.injector.get(ColorsService).getAll();
  }
  ngOnInit() {}
}
