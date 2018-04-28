import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UrlService } from 'iwe7/utils';
import { HttpClient } from '@angular/common/http';
import { TableBuilderLoki } from '../../table-builder';
import { isArray, every, some } from 'underscore';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'table-search',
  templateUrl: 'table-search.html',
  styleUrls: ['./table-search.scss']
})
export class TableSearch implements OnInit {
  form: FormGroup;
  controlArray: any = {};
  filter: any = [];
  isCollapse = true;
  name: string;
  constructor(
    public fb: FormBuilder,
    public route: ActivatedRoute,
    public url: UrlService,
    public http: HttpClient,
    public builder: TableBuilderLoki
  ) {
    this.form = this.fb.group({});
    this.route.queryParams.subscribe(res => {
      let { name } = res;
      this.name = name || '';
    });
  }

  ngOnInit() {
    let table = this.builder.getData(item => {
      return item.name === this.name;
    });
    this.filter = table['filter'] || [];
    let newObj = {};
    this.filter.map(res => {
      newObj[res.name] = res.value || '';
    });
    this.controlArray = newObj;
    this.refreshForm();
  }

  refreshForm() {
    // 初始化
    let result = this.objToForm(this.controlArray);
    for (let key in result) {
      if (this.form.contains(key)) {
        this.form.setControl(key, result[key]);
      } else {
        this.form.addControl(key, result[key]);
      }
    }
    console.log(this.form);
    this.form.valueChanges.pipe(debounceTime(200)).subscribe(res => {
      // 保存
      this.http
        .post(
          this.url.getUrl('elements/table', { table: this.name, op: 'save' }),
          res.list
        )
        .subscribe(res => {
          console.log(res);
        });
    });
  }

  resetForm() {
    this.form.reset();
  }

  toggleCollapse() {
    this.isCollapse = !this.isCollapse;
    this.filter.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }

  objToForm(objs: any) {
    let toString = Object.prototype.toString;
    let newObj;
    if (isArray(objs)) {
      newObj = [...objs];
    } else {
      newObj = { ...objs };
    }
    for (let key in objs) {
      if (
        toString.call(objs[key]) === '[object String]' ||
        toString.call(objs[key]) === '[object Number]' ||
        toString.call(objs[key]) === '[object Boolean]' ||
        toString.call(objs[key]) === '[object Null]'
      ) {
        newObj[key] = this.fb.control(objs[key]);
      }
      // array like
      if (this.isArrayLike(objs[key])) {
        let newArray = this.objToForm(objs[key]);
        let newCopy = [];
        for (let key in newArray) {
          newCopy.push(newArray[key]);
        }
        newObj[key] = this.fb.array(newCopy);
      }
      if (toString.call(objs[key]) === '[object Object]') {
        newObj[key] = this.fb.group(this.objToForm(objs[key]));
      }
    }
    return newObj;
  }

  isArrayLike(obj) {
    let toString = Object.prototype.toString;
    if (toString.call(obj) === '[object Array]') {
      return true;
    }
    if (toString.call(obj) === '[object Object]') {
      let err = every(Object.keys(obj), x => {
        return !isNaN(parseInt(x, 10)); // 都是数字
      });
      return err;
    }
    return false;
  }
}
