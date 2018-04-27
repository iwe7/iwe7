import { OnInit, Component, Input, ViewEncapsulation } from '@angular/core';
import { Table, TableField } from '../../interface';
import { TableBuilderLoki } from '../../table-builder';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'iwe7/antd/message';
import { Subject } from 'rxjs';
@Component({
  selector: 'table-builder',
  templateUrl: './table-builder.html',
  styleUrls: ['./table-builder.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableBuilder implements OnInit {
  table: Table;
  activeTable: Table;

  updateForm$: Subject<any> = new Subject();

  form: FormGroup;

  tables: any[] = [];

  nzSelectedIndex: number = 0;

  tabs: any = [
    {
      title: '数据库字段',
      icon: 'anticon anticon-database'
    },
    {
      title: '数据库索引',
      icon: 'anticon anticon-pushpin-o'
    },
    {
      title: '数据库外键',
      icon: 'anticon anticon-exception'
    },
    {
      title: '表单设置',
      icon: 'anticon anticon-form'
    },
    {
      title: '展示设置',
      icon: 'anticon anticon-table'
    },
    {
      title: '搜索设置',
      icon: 'anticon anticon-filter'
    },
    {
      title: '导出设置',
      icon: 'anticon anticon-filter'
    }
  ];

  // 数据
  TableFieldType: any[] = [
    {
      title: '数字',
      value: 'int'
    },
    {
      title: '布尔值',
      value: 'tinyint'
    },
    {
      title: '大数字',
      value: 'bigint'
    },
    {
      title: '金额',
      value: 'decimal'
    },
    {
      title: '字符串',
      value: 'varchar'
    },
    {
      title: '文本',
      value: 'text'
    },
    {
      title: '富文本',
      value: 'mediumtext'
    }
  ];

  TableFieldFormType = [
    {
      title: '数字',
      value: 'number'
    },
    {
      title: '浮点数',
      value: 'decimal'
    },
    {
      title: '电话',
      value: 'mobile'
    },
    {
      title: '邮箱',
      value: 'email'
    },
    {
      title: '密码',
      value: 'password'
    },
    {
      title: '姓名',
      value: 'realname'
    },
    {
      title: '图片',
      value: 'image'
    },
    {
      title: '图集',
      value: 'thumbs'
    },
    {
      title: '布尔',
      value: 'boolean'
    },
    {
      title: '下拉选择',
      value: 'select'
    },
    {
      title: '多选标签',
      value: 'tagsSelect'
    },
    {
      title: '单选',
      value: 'radio'
    },
    {
      title: '多选',
      value: 'checkbox'
    },
    {
      title: '文本',
      value: 'text'
    },
    {
      title: '文本域',
      value: 'textarea'
    },
    {
      title: '富文本',
      value: 'mediumtext'
    },
    {
      title: '图标',
      value: 'icon'
    },
    {
      title: '链接',
      value: 'link'
    },
    {
      title: '开关',
      value: 'switch'
    },
    {
      title: '地址',
      value: 'address'
    },
    {
      title: '城市',
      value: 'city'
    },
    {
      title: '日期',
      value: 'date'
    },
    {
      title: '日期时间',
      value: 'date-time'
    },
    {
      title: '时间',
      value: 'time'
    },
    
    {
      title: '语音',
      value: 'audio'
    },
    {
      title: '语音集',
      value: 'audios'
    },
    {
      title: '视频',
      value: 'video'
    },
    {
      title: '视频集',
      value: 'videos'
    },
    {
      title: '文件',
      value: 'file'
    },
    {
      title: '文件集',
      value: 'files'
    }
  ];

  TableFieldShowType = [
    {
      title: '静态文本',
      value: 'label'
    },
    {
      title: '单选',
      value: 'radio'
    },
    {
      title: '选框',
      value: 'checkbox'
    },
    {
      title: '开关',
      value: 'radio'
    },
    {
      title: '选择',
      value: 'select'
    },
    {
      title: '图片',
      value: 'image'
    },
    {
      title: '标签',
      value: 'tag'
    },
    {
      title: '视频',
      value: 'video'
    },
    {
      title: '音频',
      value: 'audio'
    }
  ];

  TableIndexType = [
    {
      title: '主键索引',
      value: 'PRIMARY'
    },
    {
      title: '唯一索引',
      value: 'UNIQUE'
    },
    {
      title: '序号索引',
      value: 'INDEX'
    },
    {
      title: '全文索引',
      value: 'FULLTEXT'
    }
  ];

  name: string;
  constructor(
    public builder: TableBuilderLoki,
    public fb: FormBuilder,
    public route: ActivatedRoute,
    public message: NzMessageService
  ) {
    this.route.queryParams.subscribe(res => {
      let { name } = res;
      this.name = name || '';
    });

    this.form = this.fb.group({
      name: [''],
      title: [''],
      desc: [''],
      fields: this.fb.array([]),
      indexs: this.fb.array([]),
      foreigns: this.fb.array([]),
      form: this.fb.array([]),
      preview: this.fb.array([]),
      filter: this.fb.array([]),
      export: this.fb.array([])
    });
  }
  ngOnInit() {
    this.table = this.builder.getData(item => {
      return item.name === this.name;
    });
    if (this.table) {
      // 初始化
      let result = this.objToForm(this.table);
      for (let key in result) {
        if (this.form.contains(key)) {
          this.form.setControl(key, result[key]);
        } else {
          this.form.addControl(key, result[key]);
        }
      }
    }
    this.tables = this.builder.where(item => {
      return true;
    });
    this.form.valueChanges.subscribe(res => {
      // 保存
    });
  }

  getToTable(e) {
    let results = this.tables.filter(item => {
      return item.name === e;
    });
    this.activeTable = results[0];
    return this.activeTable;
  }

  objToForm(objs: any) {
    let toString = Object.prototype.toString;
    let newObj = { ...objs };
    for (let key in objs) {
      if (
        toString.call(objs[key]) === '[object String]' ||
        toString.call(objs[key]) === '[object Number]' ||
        toString.call(objs[key]) === '[object Boolean]' ||
        toString.call(objs[key]) === '[object Null]'
      ) {
        newObj[key] = this.fb.control(objs[key]);
      }
      if (toString.call(objs[key]) === '[object Array]') {
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

  initFormArray(arrs: any[], type) {
    arrs.map(res => {
      this[type].push(this.fb.group(res));
    });
  }

  saveTable() {
    let res = this.form.value;
    if (res.name) {
      this.builder.insertOrUpdate(item => {
        return item.name === res.name;
      }, res);
      this.updateForm$.next();
      this.message.success('保存成功');
    }
  }

  addField() {
    let field: TableField = {
      name: '',
      type: 'int',
      length: 11,
      null: true,
      ai: false,
      default: null
    };
    (<FormArray>this.form.get('fields')).push(this.fb.group(field));
  }

  addIndex() {
    (<FormArray>this.form.get('indexs')).push(
      this.fb.group({
        type: 'UNIQUE',
        rows: this.fb.array([]),
        name: ''
      })
    );
  }

  addForeigns() {
    (<FormArray>this.form.get('foreigns')).push(
      this.fb.group({
        from: '',
        toTable: '',
        to: ''
      })
    );
  }

  addForm() {
    (<FormArray>this.form.get('form')).push(
      this.fb.group({
        name: '',
        label: '',
        type: '',
        placeholder: '',
        value: '',
        tip: '',
        data: {},
        validators: []
      })
    );
  }

  addFormPreview() {
    (<FormArray>this.form.get('preview')).push(
      this.fb.group({
        name: '',
        title: '',
        type: '',
        isSort: false
      })
    );
  }

  addFilter() {
    (<FormArray>this.form.get('filter')).push(
      this.fb.group({
        name: 'id',
        title: 'ID编号',
        type: 'text',
        data: {}
      })
    );
  }

  addExport() {
    (<FormArray>this.form.get('export')).push(
      this.fb.group({
        name: 'id',
        title: 'ID编号'
      })
    );
  }

  indexChange(e, item) {
    item.name = e
      .map((res: string) => {
        return res.toUpperCase();
      })
      .join('-');
  }

  addData() {
    switch (this.nzSelectedIndex) {
      case 0:
        this.addField();
        break;
      case 1:
        this.addIndex();
        break;
      case 2:
        this.addForeigns();
        break;
      case 3:
        this.addForm();
        break;
      case 4:
        this.addFormPreview();
        break;
      case 5:
        this.addFilter();
        break;
      case 6:
        this.addExport();
        break;
    }
  }

  saveData() {
    this.saveTable();
  }

  setView(e) {
    console.log(e);
  }

  nzSelectChange(e) {
    this.nzSelectedIndex = e.index;
  }

  confirmDelete(item, type) {
    this.form.get(type).value.map((res, index) => {
      if (res === item) {
        (<FormArray>this.form.get(type)).removeAt(index);
      }
    });
  }
}
