import { Component, OnInit } from "@angular/core";
import * as _ from "underscore";
import { Iwe7DesignAddonService } from "../iwe7-design-addon.service";
import { Iwe7DesignLibraryService } from "../iwe7-design-library.service";
@Component({
  selector: "design-layout",
  templateUrl: "./design-layout.component.html",
  styleUrls: ["./design-layout.component.scss"]
})
export class DesignLayoutComponent implements OnInit {
  editPage: any;
  activeModule: any;

  constructor(
    public addon: Iwe7DesignAddonService,
    public lib: Iwe7DesignLibraryService
  ) {}

  ngOnInit() {
    this.activeModule = this.addon.app.props["runner"];
    this.editPage = this.activeModule.props[0];
  }

  doEditModule(module) {
    this.activeModule = module;
  }

  doEditPage(page) {
    this.editPage = page;
  }

  addComponent(item) {
    this.editPage.props.push({
      ...item.item.props,
      id: new Date().getTime()
    })
  }
}
