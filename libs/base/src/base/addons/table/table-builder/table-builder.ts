import { OnInit, Component, Input } from '@angular/core';
import { Table, TableField } from '../../interface';
import { TableBuilderLoki } from '../../table-builder';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'table-builder',
  templateUrl: './table-builder.html',
  styleUrls: ['./table-builder.scss']
})
export class TableBuilder implements OnInit {
  table: Table;
  form: FormGroup;
  fields: FormArray;
  indexs: FormArray;
  foreigns: FormArray;

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
      title: '数据管理',
      icon: 'anticon anticon-appstore-o'
    },
    {
      title: '数据统计',
      icon: 'anticon anticon-dot-chart'
    },
    {
      title: '表单设计',
      icon: 'anticon anticon-form'
    },
    {
      title: '表格设计',
      icon: 'anticon anticon-table'
    },
    {
      title: '搜索设计',
      icon: 'anticon anticon-filter'
    },
    {
      title: '数据设置',
      icon: 'anticon anticon-setting'
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
      title: '选择',
      value: 'select'
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
      title: '图标',
      value: 'icon'
    },
    {
      title: '链接',
      value: 'link'
    },
    {
      title: '单选',
      value: 'radio'
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
      title: '富文本',
      value: 'mediumtext'
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

  name: string;
  constructor(
    public builder: TableBuilderLoki,
    public fb: FormBuilder,
    public route: ActivatedRoute
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
      foreigns: this.fb.array([])
    });

    this.fields = this.form.get('fields') as FormArray;
    this.indexs = this.form.get('indexs') as FormArray;
    this.foreigns = this.form.get('foreigns') as FormArray;
  }
  ngOnInit() {
    this.table = this.builder.getData(item => {
      return item.name === this.name;
    });
    if (this.table) {
      // 初始化
      this.form.reset(this.table);
      this.initFormArray(this.table.fields || [], 'fields');
      this.initFormArray(this.table.indexs || [], 'indexs');
      this.initFormArray(this.table.foreigns || [], 'foreigns');
    }
    this.form.valueChanges.subscribe(res => {
      // 保存
    });
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
    }
  }

  addField() {
    let field: TableField = {
      name: '',
      type: 'int',
      length: 11,
      null: true,
      ai: false,
      default: null,
      formType: 'number',
      placeholder: '请输入',
      validators: [],
      isShow: true,
      isForm: false,
      showType: 'label',
      isSort: true,
      isFilter: true,
      isExport: true
    };
    this.fields.push(this.fb.group(field));
  }

  setView(e){
    console.log(e);
  }
}
