import * as lokijs from 'lokijs';
import { Collection } from 'lokijs';
export class LokiModel {
  db: any;
  col: any;
  dynamicView: any;
  constructor(private name: string) {
    this.createDb();
    let json = localStorage.getItem(this.name);
    if (json) {
      this.db.loadJSON(json);
    }
    this.addCollection();
  }
  private createDb() {
    this.db = new lokijs(this.name);
  }
  private addCollection() {
    this.col = this.db.addCollection(this.name);
  }

  private addDynamicView() {
    this.col.removeDynamicView(this.name);
    this.dynamicView = this.col.addDynamicView(this.name, {
      persistent: true
    });
  }

  listCollections() {
    let list = this.db.listCollections();
    return list;
  }

  insert(data): any {
    let item = this.col.insert(data);
    this.serialize();
    return item;
  }

  find(params) {
    return this.col.find(params);
  }

  update(data) {
    return this.col.update(data);
  }

  get(id) {
    return this.col.get(id);
  }

  where(filter: (data: any) => boolean) {
    return this.col.where(filter);
  }

  mapReduce() {}

  findAndUpdate() {}

  remove(id): void {
    this.col.removeWhere(item => {
      return item.$loki === id;
    });
    this.serialize();
  }

  serialize() {
    let serialize = this.db.serialize();
    localStorage.setItem(this.name, serialize);
    return serialize;
  }
}
