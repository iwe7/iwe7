import { OnInit, Component, Input } from '@angular/core';
import { Table } from '../../interface';
import { TableBuilderLoki } from '../../table-builder';
import { MeepoRender } from 'iwe7/render';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';

import { UrlService } from 'iwe7/utils';
import { HttpClient } from '@angular/common/http';
import { isArray, every, some } from 'underscore';

@Component({
  selector: 'table-preview',
  templateUrl: './table-preview.html',
  styleUrls: ['./table-preview.scss']
})
export class TablePreview implements OnInit {
  name: string;
  formObj: any[] = [];
  form: FormGroup;

  @Input() change$: Subject<any> = new Subject();
  @Input() update$: Subject<any> = new Subject();
  constructor(
    public builder: TableBuilderLoki,
    public router: Router,
    public fb: FormBuilder,
    public route: ActivatedRoute,
    public url: UrlService,
    public http: HttpClient
  ) {
    this.route.queryParams.subscribe(res => {
      let { name } = res;
      this.name = name || '';
    });
    this.form = this.fb.group({
      list: this.fb.array([]),
      setting: this.fb.array([])
    });
  }
  list: any[] = [];
  ngOnInit() {
    this.initForm();
    this.update$.subscribe(res => {
      this.initForm();
    });
    this.http
      .get(this.url.getUrl('elements/table', { table: this.name, op: 'data' }))
      .subscribe((res: any) => {
        this.list = res.data;
        this.refreshForm();
      });
  }

  initForm() {
    let table = this.builder.getData(item => {
      return item.name === this.name;
    });
    this.formObj = table['preview'] || [];
  }

  refreshForm() {
    // 初始化
    let result = this.objToForm({
      list: this.list,
      setting: this.formObj
    });
    for (let key in result) {
      if (this.form.contains(key)) {
        this.form.setControl(key, result[key]);
      } else {
        this.form.addControl(key, result[key]);
      }
    }
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
