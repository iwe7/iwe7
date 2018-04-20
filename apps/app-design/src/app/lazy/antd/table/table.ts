import {
  Component,
  OnInit,
  TemplateRef,
  Input,
  ViewContainerRef,
  ViewChild,
  AfterViewInit,
  ElementRef,
  HostBinding
} from '@angular/core';
@Component({
  selector: 'iwe7-table',
  templateUrl: 'table.html',
  styleUrls: ['./table.scss']
})
export class Iwe7TableComponent implements OnInit {
  list: any[] = [
    {
      id: '1',
      realname: 'realname1',
      nickname: 'nickname1',
      avatar: '',
      mobile: '13140415408',
      switch: false,
      rate: 3,
      badge: 'badge'
    },
    {
      id: '2',
      realname: 'realname2',
      nickname: 'nickname2',
      avatar: '',
      mobile: '13140415408',
      switch: false,
      rate: 4,
      badge: 'badge'
    },
    {
      id: '3',
      realname: 'realname3',
      nickname: 'nickname3',
      avatar: '',
      mobile: '13140415408',
      switch: false,
      rate: 5,
      badge: 'badge'
    },
    {
      id: '4',
      realname: 'realname3',
      nickname: 'nickname3',
      avatar: '',
      mobile: '13140415408',
      switch: false,
      rate: 3,
      badge: 'badge'
    }
  ];
  nzExpand: boolean = true;
  columns: any[] = [
    {
      title: '',
      type: 'checkbox',
      name: 'id',
      th: {
        nzSelections: [],
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzSortKey: '',
        nzFilterMultiple: true,
        nzWidth: '100px',
        nzShowSort: true,
        nzShowFilter: true,
        nzShowRowSelection: true,
        nzLeft: 'left',
        nzRight: 'right',
        nzExpand: true,
        nzShowCheckbox: true,
        nzSort: '',
        nzCheckedChange: isCheck => {
          console.log(isCheck);
        }
      },
      td: {
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzIndentSize: 10,
        nzExpand: true,
        nzShowExpand: false,
        nzShowCheckbox: true,
        nzLeft: 'left',
        nzRight: 'right'
      }
    },
    {
      title: 'c1',
      type: 'tag',
      name: 'realname',
      th: {
        nzSelections: [],
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzSortKey: '',
        nzFilterMultiple: true,
        nzWidth: '100px',
        nzShowSort: true,
        nzShowFilter: true,
        nzShowRowSelection: true,
        nzLeft: 'left',
        nzRight: 'right',
        nzExpand: true,
        nzShowCheckbox: false,
        nzSort: '',
        nzCheckedChange: isCheck => {
          console.log(isCheck);
        }
      },
      td: {
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzIndentSize: 10,
        nzExpand: true,
        nzShowExpand: false,
        nzShowCheckbox: false,
        nzLeft: 'left',
        nzRight: 'right'
      }
    },
    {
      title: 'c3',
      type: 'checkbox',
      name: 'nickname',
      th: {
        nzSelections: [],
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzSortKey: '',
        nzFilterMultiple: true,
        nzWidth: '100px',
        nzShowSort: true,
        nzShowFilter: true,
        nzShowRowSelection: true,
        nzLeft: 'left',
        nzRight: 'right',
        nzExpand: true,
        nzShowCheckbox: false,
        nzSort: '',
        nzCheckedChange: isCheck => {
          console.log(isCheck);
        }
      },
      td: {
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzIndentSize: 10,
        nzExpand: true,
        nzShowExpand: false,
        nzShowCheckbox: false,
        nzLeft: 'left',
        nzRight: 'right'
      }
    },
    {
      title: 'c4',
      type: 'avatar',
      name: 'avatar',
      th: {
        nzSelections: [],
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzSortKey: '',
        nzFilterMultiple: true,
        nzWidth: '100px',
        nzShowSort: true,
        nzShowFilter: true,
        nzShowRowSelection: true,
        nzLeft: 'left',
        nzRight: 'right',
        nzExpand: true,
        nzShowCheckbox: false,
        nzSort: '',
        nzCheckedChange: isCheck => {
          console.log(isCheck);
        }
      },
      td: {
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzIndentSize: 10,
        nzExpand: true,
        nzShowExpand: false,
        nzShowCheckbox: false,
        nzLeft: 'left',
        nzRight: 'right'
      }
    },
    {
      title: 'c5',
      type: 'mobile',
      name: 'mobile',
      th: {
        nzSelections: [],
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzSortKey: '',
        nzFilterMultiple: true,
        nzWidth: '100px',
        nzShowSort: true,
        nzShowFilter: true,
        nzShowRowSelection: true,
        nzLeft: 'left',
        nzRight: 'right',
        nzExpand: true,
        nzShowCheckbox: false,
        nzSort: '',
        nzCheckedChange: isCheck => {
          console.log(isCheck);
        }
      },
      td: {
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzIndentSize: 10,
        nzExpand: true,
        nzShowExpand: false,
        nzShowCheckbox: false,
        nzLeft: 'left',
        nzRight: 'right'
      }
    },
    {
      title: 'c5',
      type: 'switch',
      name: 'switch',
      th: {
        nzSelections: [],
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzSortKey: '',
        nzFilterMultiple: true,
        nzWidth: '100px',
        nzShowSort: true,
        nzShowFilter: true,
        nzShowRowSelection: true,
        nzLeft: 'left',
        nzRight: 'right',
        nzExpand: true,
        nzShowCheckbox: false,
        nzSort: '',
        nzCheckedChange: isCheck => {
          console.log(isCheck);
        }
      },
      td: {
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzIndentSize: 10,
        nzExpand: true,
        nzShowExpand: false,
        nzShowCheckbox: false,
        nzLeft: 'left',
        nzRight: 'right'
      }
    },
    {
      title: 'c5',
      type: 'rate',
      name: 'rate',
      th: {
        nzSelections: [],
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzSortKey: '',
        nzFilterMultiple: true,
        nzWidth: '100px',
        nzShowSort: true,
        nzShowFilter: true,
        nzShowRowSelection: true,
        nzLeft: 'left',
        nzRight: 'right',
        nzExpand: true,
        nzShowCheckbox: false,
        nzSort: '',
        nzCheckedChange: isCheck => {
          console.log(isCheck);
        }
      },
      td: {
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzIndentSize: 10,
        nzExpand: true,
        nzShowExpand: false,
        nzShowCheckbox: false,
        nzLeft: 'left',
        nzRight: 'right'
      }
    },
    {
      title: 'c5',
      type: 'badge',
      name: 'badge',
      th: {
        nzSelections: [],
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzSortKey: '',
        nzFilterMultiple: true,
        nzWidth: '100px',
        nzShowSort: true,
        nzShowFilter: true,
        nzShowRowSelection: true,
        nzLeft: 'left',
        nzRight: 'right',
        nzExpand: true,
        nzShowCheckbox: false,
        nzSort: '',
        nzCheckedChange: isCheck => {
          console.log(isCheck);
        }
      },
      td: {
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzIndentSize: 10,
        nzExpand: true,
        nzShowExpand: false,
        nzShowCheckbox: false,
        nzLeft: 'left',
        nzRight: 'right'
      }
    },
    {
      title: 'c5',
      type: 'button',
      buttons: [
        {
          title: '编辑'
        },
        {
          title: '删除'
        },
        {
          title: '更多'
        }
      ],
      th: {
        nzSelections: [],
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzSortKey: '',
        nzFilterMultiple: true,
        nzWidth: '100px',
        nzShowSort: true,
        nzShowFilter: true,
        nzShowRowSelection: true,
        nzLeft: 'left',
        nzRight: 'right',
        nzExpand: true,
        nzShowCheckbox: false,
        nzSort: '',
        nzCheckedChange: isCheck => {
          console.log(isCheck);
        }
      },
      td: {
        nzChecked: false,
        nzDisabled: false,
        nzIndeterminate: false,
        nzIndentSize: 10,
        nzExpand: true,
        nzShowExpand: false,
        nzShowCheckbox: false,
        nzLeft: 'left',
        nzRight: 'right'
      }
    }
  ];

  constructor() {}
  ngOnInit() {}

  // td
  nzCheckedChange(e) {}
  nzExpandChange(e) {}

  //th
  nzThSortChange(e) {}

  nzThCheckedChange(e) {}

  nzThSortChangeWithKey(e) {}

  nzThFilterChange(e) {}

  // thead
  nzSingleSort: boolean = true;
  nzSortChange(e: { key: string; value: string }) {
    console.log(e);
  }
}
