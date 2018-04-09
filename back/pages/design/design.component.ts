import { Component, OnInit } from '@angular/core';
import { Iwe7DesignAddonService } from '../../iwe7-design-addon.service';

@Component({
  selector: 'design-page',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignPage implements OnInit {

  constructor(
    public addon: Iwe7DesignAddonService
  ) { }

  ngOnInit() {
    console.log(this.addon);
  }

}
