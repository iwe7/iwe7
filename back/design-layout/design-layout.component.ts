import { Component, OnInit } from "@angular/core";
import * as _ from "underscore";
@Component({
  selector: "design-layout",
  templateUrl: "./design-layout.component.html",
  styleUrls: ["./design-layout.component.scss"]
})
export class DesignLayoutComponent implements OnInit {
  editPage: any;
  activeModule: any;

  constructor(
  ) {}

  ngOnInit() {
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
