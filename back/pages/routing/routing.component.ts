import { Component, OnInit } from '@angular/core';
import { Iwe7DesignAddonService } from '../../iwe7-design-addon.service';

@Component({
  selector: 'routing-page',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingPage implements OnInit {

  constructor(
    public addon: Iwe7DesignAddonService
  ) { }

  ngOnInit() {
  }

}
