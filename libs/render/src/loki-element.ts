import * as lokijs from 'lokijs';
import { Collection } from 'lokijs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RenderElementLokijs {
  name: string = 'meepo.element';
  db: Loki;
  element: Collection;
  dynamicView: any;
  constructor() {
    this.createDb();
    let json = localStorage.getItem(this.name);
    if (json) {
      this.db.loadJSON(json);
    }
    this.addCollection('element', [
      'selector',
      'inputs',
      'outputs',
      'children',
      'outlet',
      'fid',
      'id'
    ]);
    this.addDynamicView();
    this.listCollections();
  }

  private addDynamicView() {
    this.element.removeDynamicView(this.name);
    this.dynamicView = this.element.addDynamicView(this.name, {
      persistent: true
    });
  }
  private createDb() {
    this.db = new lokijs(this.name);
  }

  private addCollection(name, fields: string[]) {
    this.element = this.db.addCollection(this.name);
  }

  listCollections() {
    let list = this.db.listCollections();
    return list;
  }

  insert(data): void {
    if (data) {
      let item = this.element.insert(data);
      this.serialize();
      return item;
    }
  }

  find(params) {
    return this.element.find(params);
  }

  update(data) {
    return this.element.update(data);
  }

  get(id) {
    return this.element.get(id);
  }

  where(filter: (data: any) => boolean) {
    return this.element.where(filter);
  }

  mapReduce() {}

  findAndUpdate() {}

  remove(id): void {
    this.element.removeWhere(item => {
      return item.id === id;
    });
    this.serialize();
  }

  serialize() {
    let serialize = this.db.serialize();
    localStorage.setItem(this.name, serialize);
    return serialize;
  }
}
