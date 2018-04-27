import { OnInit, Component, Input } from '@angular/core';
import { Table } from '../../interface';
import { TableBuilderLoki } from '../../table-builder';
import { MeepoRender } from 'iwe7/render';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'table-list',
  templateUrl: './table-list.html',
  styleUrls: ['./table-list.scss']
})
export class TableList implements OnInit {
  tables: Table[] = [];
  form: FormGroup;

  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  constructor(
    public builder: TableBuilderLoki,
    public router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initTables();
    this.form = this.fb.group({
      name: '',
      desc: '',
      title: '',
      fields: [],
      indexs: [],
      foreigns: []
    });
  }

  initTables() {
    this.tables = this.builder.where(item => {
      return true;
    });
  }

  addTable() {
    let res = this.form.value;
    if (res.name) {
      this.builder.insertOrUpdate(item => {
        return item.name === res.name;
      }, res);
    }
    this.initTables();
  }

  editTable(item) {
    this.form.reset(item);
  }

  tableDesign(item) {
    this.router.navigate(['/table-builder'], {
      queryParams: {
        name: item.name,
        code: 'table-builder'
      }
    });
  }

  deleteTable(item) {
    this.builder.remove(item.$loki);
    this.tables.map((res: any, index: number) => {
      if (item === res) {
        this.tables.splice(index, 1);
      }
    });
  }
}
