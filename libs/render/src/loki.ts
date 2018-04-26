import * as lokijs from 'lokijs';
import { Collection } from 'lokijs';
import { Subject } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';

export class LokiModel {
  db: any;
  col: Collection<any>;
  dynamicView: any;
  save$: Subject<any> = new Subject();

  constructor(private name: string) {
    this.createDb();
    let json = localStorage.getItem(this.name);
    if (json) {
      this.db.loadJSON(json);
    }
    this.addCollection();
    this.save$
      .pipe(
        //tap
        debounceTime(300),
        tap(res => {
          this.serialize();
        })
      )
      .subscribe();
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

  autoSave() {
    this.save$.next();
  }

  autoUpdate() {
    this.autoSave();
  }

  listCollections() {
    let list = this.db.listCollections();
    return list;
  }

  add(where, data) {
    let items = this.where(where);
    let installPage;
    if (items.length === 0) {
      installPage = this.insert(data);
    } else {
      installPage = items[0];
    }
    return installPage;
  }

  getData(where) {
    let datas = this.where(where);
    if (datas.length > 0) {
      return datas[0];
    }
  }

  insert(data): any {
    let item = this.col.insert(data);
    this.autoSave();
    return item;
  }

  insertOrUpdate(where, data) {
    let item = this.getData(where);
    let itemNew = {
      ...item,
      ...data
    };
    if (item) {
      this.update(itemNew);
    } else {
      this.insert(itemNew);
    }
    this.autoUpdate();
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

  findAndUpdate(
    filterObject: ((data: any) => boolean),
    updateFunction: (obj: any) => any
  ) {
    this.col.findAndUpdate(filterObject, updateFunction);
    return this.getData(filterObject);
  }

  where(filter: (data: any) => boolean) {
    return this.col.where(filter);
  }

  pipe() {
    return this.col.chain();
  }

  mapReduce() {}

  remove(id): void {
    this.col.removeWhere(item => {
      return item.$loki === id;
    });
    this.autoSave();
  }

  serialize() {
    let serialize = this.db.serialize();
    localStorage.setItem(this.name, serialize);
    return serialize;
  }
}
