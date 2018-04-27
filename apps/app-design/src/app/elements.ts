import { Injectable } from '@angular/core';
// import { InitService } from 'iwe7/core';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {
  pre: string = 'imeepos.';
  // constructor(public _init: InitService) {}

  // install() {
  //   this.initNzInput();
  //   this.initNzInputNumber();
  //   this.initNzRadio();
  //   this.initNzSelect();
  //   this.initNzSwitch();
  //   this.initNzCheckbox();
  //   this.initNzCheckboxGroup();
  //   this.initNzMenu();
  //   this.initNzRate();
  //   this.initNzTag();
  //   this.initSlider();
  //   this.initTimeline();
  //   this.initUpload();
  //   this.initButton();
  //   this.initNzTextarea();
  //   this.initIcon();
  //   this.initSpan();
  //   this.initForms();
  //   this.initTable();
  // }
  // private saveData(data, type) {
  //   this._init
  //     .addElements({
  //       opts: data,
  //       events: { type: type }
  //     })
  //     .subscribe();
  // }
  // private initTable(){
  //   let data = {
  //     selector: 'nz-table',
  //     inputs: {
  //       list: [{
  //         id: '1',
  //         realname: 'realname1',
  //         nickname: 'nickname1',
  //         avatar: '',
  //         mobile: '13140415408',
  //         switch: false,
  //         rate: 3,
  //         badge: 'badge'
  //       },{
  //         id: '2',
  //         realname: 'realname2',
  //         nickname: 'nickname2',
  //         avatar: '',
  //         mobile: '13140415408',
  //         switch: false,
  //         rate: 4,
  //         badge: 'badge'
  //       },{
  //         id: '3',
  //         realname: 'realname3',
  //         nickname: 'nickname3',
  //         avatar: '',
  //         mobile: '13140415408',
  //         switch: false,
  //         rate: 5,
  //         badge: 'badge'
  //       },{
  //         id: '4',
  //         realname: 'realname3',
  //         nickname: 'nickname3',
  //         avatar: '',
  //         mobile: '13140415408',
  //         switch: false,
  //         rate: 3,
  //         badge: 'badge'
  //       }],
  //       nzExpand: true,
  //       columns: [{
  //         title: '',
  //         type: 'checkbox',
  //         name: 'id',
  //         th: {
  //           nzSelections: [],
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzSortKey: '',
  //           nzFilterMultiple: true,
  //           nzWidth: '100px',
  //           nzShowSort: true,
  //           nzShowFilter: true,
  //           nzShowRowSelection: true,
  //           nzLeft: 'left',
  //           nzRight: 'right',
  //           nzExpand: true,
  //           nzShowCheckbox: true,
  //           nzSort: '',
  //           nzCheckedChange: (isCheck)=>{
  //             console.log(isCheck);
  //           }
  //         },
  //         td: {
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzIndentSize: 10,
  //           nzExpand: true,
  //           nzShowExpand: false,
  //           nzShowCheckbox: true,
  //           nzLeft: 'left',
  //           nzRight: 'right'
  //         }
  //       },{
  //         title: 'c1',
  //         type: 'tag',
  //         name: 'realname',
  //         th: {
  //           nzSelections: [],
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzSortKey: '',
  //           nzFilterMultiple: true,
  //           nzWidth: '100px',
  //           nzShowSort: true,
  //           nzShowFilter: true,
  //           nzShowRowSelection: true,
  //           nzLeft: 'left',
  //           nzRight: 'right',
  //           nzExpand: true,
  //           nzShowCheckbox: false,
  //           nzSort: '',
  //           nzCheckedChange: (isCheck)=>{
  //             console.log(isCheck);
  //           }
  //         },
  //         td: {
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzIndentSize: 10,
  //           nzExpand: true,
  //           nzShowExpand: false,
  //           nzShowCheckbox: false,
  //           nzLeft: 'left',
  //           nzRight: 'right'
  //         }
  //       },{
  //         title: 'c3',
  //         type: 'checkbox',
  //         name: 'nickname',
  //         th: {
  //           nzSelections: [],
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzSortKey: '',
  //           nzFilterMultiple: true,
  //           nzWidth: '100px',
  //           nzShowSort: true,
  //           nzShowFilter: true,
  //           nzShowRowSelection: true,
  //           nzLeft: 'left',
  //           nzRight: 'right',
  //           nzExpand: true,
  //           nzShowCheckbox: false,
  //           nzSort: '',
  //           nzCheckedChange: (isCheck)=>{
  //             console.log(isCheck);
  //           }
  //         },
  //         td: {
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzIndentSize: 10,
  //           nzExpand: true,
  //           nzShowExpand: false,
  //           nzShowCheckbox: false,
  //           nzLeft: 'left',
  //           nzRight: 'right'
  //         }
  //       },{
  //         title: 'c4',
  //         type: 'avatar',
  //         name: 'avatar',
  //         th: {
  //           nzSelections: [],
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzSortKey: '',
  //           nzFilterMultiple: true,
  //           nzWidth: '100px',
  //           nzShowSort: true,
  //           nzShowFilter: true,
  //           nzShowRowSelection: true,
  //           nzLeft: 'left',
  //           nzRight: 'right',
  //           nzExpand: true,
  //           nzShowCheckbox: false,
  //           nzSort: '',
  //           nzCheckedChange: (isCheck)=>{
  //             console.log(isCheck);
  //           }
  //         },
  //         td: {
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzIndentSize: 10,
  //           nzExpand: true,
  //           nzShowExpand: false,
  //           nzShowCheckbox: false,
  //           nzLeft: 'left',
  //           nzRight: 'right'
  //         }
  //       },{
  //         title: 'c5',
  //         type: 'mobile',
  //         name: 'mobile',
  //         th: {
  //           nzSelections: [],
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzSortKey: '',
  //           nzFilterMultiple: true,
  //           nzWidth: '100px',
  //           nzShowSort: true,
  //           nzShowFilter: true,
  //           nzShowRowSelection: true,
  //           nzLeft: 'left',
  //           nzRight: 'right',
  //           nzExpand: true,
  //           nzShowCheckbox: false,
  //           nzSort: '',
  //           nzCheckedChange: (isCheck)=>{
  //             console.log(isCheck);
  //           }
  //         },
  //         td: {
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzIndentSize: 10,
  //           nzExpand: true,
  //           nzShowExpand: false,
  //           nzShowCheckbox: false,
  //           nzLeft: 'left',
  //           nzRight: 'right'
  //         }
  //       },{
  //         title: 'c5',
  //         type: 'switch',
  //         name: 'switch',
  //         th: {
  //           nzSelections: [],
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzSortKey: '',
  //           nzFilterMultiple: true,
  //           nzWidth: '100px',
  //           nzShowSort: true,
  //           nzShowFilter: true,
  //           nzShowRowSelection: true,
  //           nzLeft: 'left',
  //           nzRight: 'right',
  //           nzExpand: true,
  //           nzShowCheckbox: false,
  //           nzSort: '',
  //           nzCheckedChange: (isCheck)=>{
  //             console.log(isCheck);
  //           }
  //         },
  //         td: {
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzIndentSize: 10,
  //           nzExpand: true,
  //           nzShowExpand: false,
  //           nzShowCheckbox: false,
  //           nzLeft: 'left',
  //           nzRight: 'right'
  //         }
  //       },{
  //         title: 'c5',
  //         type: 'rate',
  //         name: 'rate',
  //         th: {
  //           nzSelections: [],
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzSortKey: '',
  //           nzFilterMultiple: true,
  //           nzWidth: '100px',
  //           nzShowSort: true,
  //           nzShowFilter: true,
  //           nzShowRowSelection: true,
  //           nzLeft: 'left',
  //           nzRight: 'right',
  //           nzExpand: true,
  //           nzShowCheckbox: false,
  //           nzSort: '',
  //           nzCheckedChange: (isCheck)=>{
  //             console.log(isCheck);
  //           }
  //         },
  //         td: {
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzIndentSize: 10,
  //           nzExpand: true,
  //           nzShowExpand: false,
  //           nzShowCheckbox: false,
  //           nzLeft: 'left',
  //           nzRight: 'right'
  //         }
  //       },{
  //         title: 'c5',
  //         type: 'badge',
  //         name: 'badge',
  //         th: {
  //           nzSelections: [],
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzSortKey: '',
  //           nzFilterMultiple: true,
  //           nzWidth: '100px',
  //           nzShowSort: true,
  //           nzShowFilter: true,
  //           nzShowRowSelection: true,
  //           nzLeft: 'left',
  //           nzRight: 'right',
  //           nzExpand: true,
  //           nzShowCheckbox: false,
  //           nzSort: '',
  //           nzCheckedChange: (isCheck)=>{
  //             console.log(isCheck);
  //           }
  //         },
  //         td: {
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzIndentSize: 10,
  //           nzExpand: true,
  //           nzShowExpand: false,
  //           nzShowCheckbox: false,
  //           nzLeft: 'left',
  //           nzRight: 'right'
  //         }
  //       },{
  //         title: 'c5',
  //         type: 'button',
  //         buttons: [{
  //           title: '编辑'
  //         },{
  //           title: '删除'
  //         },{
  //           title: '更多'
  //         }],
  //         th: {
  //           nzSelections: [],
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzSortKey: '',
  //           nzFilterMultiple: true,
  //           nzWidth: '100px',
  //           nzShowSort: true,
  //           nzShowFilter: true,
  //           nzShowRowSelection: true,
  //           nzLeft: 'left',
  //           nzRight: 'right',
  //           nzExpand: true,
  //           nzShowCheckbox: false,
  //           nzSort: '',
  //           nzCheckedChange: (isCheck)=>{
  //             console.log(isCheck);
  //           }
  //         },
  //         td: {
  //           nzChecked: false,
  //           nzDisabled: false,
  //           nzIndeterminate: false,
  //           nzIndentSize: 10,
  //           nzExpand: true,
  //           nzShowExpand: false,
  //           nzShowCheckbox: false,
  //           nzLeft: 'left',
  //           nzRight: 'right'
  //         }
  //       }]
  //     },
  //     outputs: [],
  //     children: {}
  //   };
  //   this.saveData(data,this.pre+'nz-table');
  // }
  // private initForms() {
  //   let data = {
  //     selector: 'nz-form',
  //     inputs: {
  //       isHorizontal: {
  //         type: 'boolean',
  //         value: true
  //       },
  //       items: {
  //         type: 'form',
  //         value: [
  //           {
  //             label: {
  //               label: 'string',
  //               value: '单行文本'
  //             },
  //             name: {
  //               name: 'string',
  //               value: 'text'
  //             },
  //             value: {
  //               type: 'string',
  //               value: 'nz-input'
  //             },
  //             children: {
  //               selector: 'nz-input',
  //               inputs: {},
  //               outputs: [],
  //               children: {}
  //             }
  //           },
  //           {
  //             label: {
  //               label: 'string',
  //               value: '多行文本'
  //             },
  //             name: {
  //               name: 'string',
  //               value: 'textarea'
  //             },
  //             value: {
  //               type: 'string',
  //               value: 'nz-textarea'
  //             },
  //             children: {
  //               selector: 'nz-textarea',
  //               inputs: {},
  //               outputs: [],
  //               children: {}
  //             }
  //           }
  //         ],
  //         types: []
  //       },
  //       footer: {
  //         selector: 'nz-button',
  //         inputs: {
  //           text: {
  //             value: ''
  //           },
  //           nzLoading: {
  //             value: false
  //           }
  //         },
  //         outputs: ['click$'],
  //         children: {
  //           content: [
  //             {
  //               selector: 'nz-span',
  //               inputs: {
  //                 text: {
  //                   value: '提交数据'
  //                 }
  //               }
  //             },
  //             {
  //               selector: 'nz-icon',
  //               inputs: {
  //                 name: {
  //                   value: 'upload'
  //                 }
  //               }
  //             }
  //           ]
  //         }
  //       },
  //       url: {
  //         type: 'url',
  //         value: ''
  //       }
  //     },
  //     outputs: ['submit$'],
  //     children: {
  //       content: {
  //         selector: 'nz-span',
  //         inputs: {
  //           text: {
  //             value: '测试'
  //           },
  //           footer: {
  //             selector: 'nz-button'
  //           }
  //         }
  //       }
  //     }
  //   };
  //   this.saveData(data, this.pre + 'nz-form');
  // }
  // private initIcon() {
  //   let data = {
  //     selector: 'nz-icon',
  //     inputs: {
  //       name: {
  //         type: 'string',
  //         value: 'heart-o'
  //       }
  //     },
  //     outputs: [],
  //     children: {}
  //   };
  //   this.saveData(data, this.pre + 'nz-icon');
  // }
  // private initSpan() {
  //   let data = {
  //     selector: 'nz-span',
  //     inputs: {
  //       text: {
  //         type: 'string',
  //         value: '文字'
  //       }
  //     },
  //     outputs: [],
  //     children: {}
  //   };
  //   this.saveData(data, this.pre + 'nz-span');
  // }
  // private initButton() {
  //   let data = {
  //     selector: 'nz-button',
  //     inputs: {
  //       nzGhost: {
  //         type: 'boolean',
  //         valeu: false
  //       },
  //       nzLoading: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzSearch: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzSize: {
  //         type: 'select',
  //         value: 'default',
  //         options: [
  //           {
  //             title: '默认',
  //             value: 'default'
  //           },
  //           {
  //             title: '小尺寸',
  //             value: 'small'
  //           },
  //           {
  //             title: '大尺寸',
  //             value: 'large'
  //           }
  //         ]
  //       },
  //       nzShape: {
  //         type: 'select',
  //         value: null,
  //         options: [
  //           {
  //             title: '默认',
  //             value: ''
  //           },
  //           {
  //             title: '圆角',
  //             value: 'circle'
  //           }
  //         ]
  //       },
  //       nzType: {
  //         type: 'select',
  //         value: 'primary',
  //         options: [
  //           {
  //             title: '主要',
  //             value: 'primary'
  //           },
  //           {
  //             title: '虚线',
  //             value: 'dashed'
  //           },
  //           {
  //             title: '危险',
  //             value: 'danger'
  //           }
  //         ]
  //       },
  //       data: {
  //         type: 'string',
  //         value: ''
  //       },
  //       text: {
  //         type: 'string',
  //         value: ''
  //       }
  //     },
  //     outputs: ['click$'],
  //     children: {
  //       content: [
  //         {
  //           selector: 'nz-icon',
  //           inputs: {
  //             name: {
  //               type: 'icon',
  //               value: 'user'
  //             }
  //           }
  //         },
  //         {
  //           selector: 'nz-span',
  //           inputs: {
  //             text: {
  //               type: 'string',
  //               value: '标题'
  //             }
  //           }
  //         }
  //       ]
  //     },
  //     title: '按钮',
  //     desc: '响应点击事件'
  //   };
  //   this.saveData(data, this.pre + 'nz-button');
  // }
  // private initUpload() {
  //   let data = {
  //     selector: 'nz-upload',
  //     inputs: {
  //       text: {
  //         type: 'string',
  //         value: '选择图片'
  //       },
  //       nzType: {
  //         type: 'select',
  //         value: 'select',
  //         options: [
  //           {
  //             title: '选择',
  //             value: 'select'
  //           },
  //           {
  //             title: '拖拽',
  //             value: 'drag'
  //           }
  //         ]
  //       },
  //       nzLimit: {
  //         type: 'number',
  //         value: 0
  //       },
  //       nzSize: {
  //         type: 'number',
  //         value: 0
  //       },
  //       nzFileType: {
  //         type: 'string',
  //         value: ''
  //       },
  //       nzAccept: {
  //         type: 'list',
  //         value: [],
  //         options: []
  //       },
  //       nzAction: {
  //         type: 'string',
  //         value: 'https://jsonplaceholder.typicode.com/posts/'
  //       },
  //       nzDisabled: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzListType: {
  //         type: 'select',
  //         value: 'picture-card',
  //         options: [
  //           {
  //             title: '文字',
  //             value: 'text'
  //           },
  //           {
  //             title: '图片',
  //             value: 'picture'
  //           },
  //           {
  //             title: '卡片',
  //             value: 'picture-card'
  //           }
  //         ]
  //       },
  //       nzMultiple: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzName: {
  //         type: 'string',
  //         value: 'file'
  //       },
  //       nzShowUploadList: {
  //         type: 'boolean',
  //         value: true
  //       },
  //       nzShowButton: {
  //         type: 'boolean',
  //         value: true
  //       },
  //       nzWithCredentials: {
  //         type: 'boolean',
  //         value: false
  //       }
  //     },
  //     outputs: ['change$', 'preview$', 'remove$'],
  //     children: {},
  //     title: '上传',
  //     desc: '用于附件上传'
  //   };
  //   this.saveData(data, this.pre + 'nz-upload');
  // }
  // private initTimeline() {
  //   let data = {
  //     selector: 'nz-timeline',
  //     inputs: {
  //       nzPending: {
  //         type: 'timeline',
  //         value: false
  //       },
  //       width: {
  //         type: 'style',
  //         value: '40px'
  //       },
  //       list: {
  //         type: 'list',
  //         items: [
  //           {
  //             title: {
  //               type: 'string',
  //               value: '标题1'
  //             },
  //             nzDot: {
  //               type: 'string',
  //               value: '2017'
  //             },
  //             nzColor: {
  //               type: 'color',
  //               value: 'red'
  //             },
  //             children: {}
  //           },
  //           {
  //             title: {
  //               type: 'string',
  //               value: '标题2'
  //             },
  //             nzDot: {
  //               type: 'string',
  //               value: '2018'
  //             },
  //             nzColor: {
  //               type: 'color',
  //               value: 'green'
  //             },
  //             children: {}
  //           }
  //         ]
  //       }
  //     },
  //     outpus: [],
  //     children: {}
  //   };
  //   this.saveData(data, this.pre + 'nz-timeline');
  // }
  // private initSlider() {
  //   let data = {
  //     selector: 'nz-slider',
  //     inputs: {
  //       nzDisabled: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzStep: {
  //         type: 'number',
  //         value: 1
  //       },
  //       nzMarks: {
  //         type: 'list',
  //         value: [
  //           {
  //             style: {
  //               type: 'style',
  //               value: {}
  //             },
  //             label: {
  //               type: 'string',
  //               value: 'label1'
  //             },
  //             position: {
  //               type: 'number',
  //               value: 10
  //             }
  //           },
  //           {
  //             style: {
  //               type: 'style',
  //               value: {}
  //             },
  //             label: {
  //               type: 'string',
  //               value: 'label2'
  //             },
  //             position: {
  //               type: 'number',
  //               value: 90
  //             }
  //           }
  //         ]
  //       },
  //       nzMin: {
  //         type: 'number',
  //         value: 0
  //       },
  //       nzMax: {
  //         type: 'number',
  //         value: 100
  //       },
  //       nzDefaultValue: {
  //         type: 'number',
  //         value: 30
  //       },
  //       nzTipFormatter: {
  //         type: 'string',
  //         value: '${value}%'
  //       },
  //       nzVertical: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzRange: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzDots: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzIncluded: {
  //         type: 'boolean',
  //         value: false
  //       }
  //     },
  //     outputs: ['change$'],
  //     children: {}
  //   };
  //   this.saveData(data, this.pre + 'nz-slider');
  // }
  // private initNzTag() {
  //   let data = {
  //     selector: 'nz-tag',
  //     inputs: {
  //       draggable: true,
  //       text: {
  //         type: 'string',
  //         value: '我是内容'
  //       },
  //       nzMode: {
  //         type: 'select',
  //         value: 'default',
  //         options: [
  //           {
  //             title: '默认',
  //             value: 'default'
  //           },
  //           {
  //             title: '可关闭',
  //             value: 'closeable'
  //           },
  //           {
  //             title: '可选择',
  //             value: 'checkable'
  //           }
  //         ]
  //       },
  //       nzColor: {
  //         type: 'color',
  //         value: 'green'
  //       },
  //       nzChecked: {
  //         type: 'boolean',
  //         value: false
  //       }
  //     },
  //     outputs: ['nzAfterClose'],
  //     children: {
  //       content: {}
  //     }
  //   };
  //   this.saveData(data, this.pre + 'nz-tag');
  // }
  // private initNzMenu() {
  //   let data = {
  //     selector: 'nz-menu',
  //     inputs: {
  //       nzTheme: {
  //         type: 'select',
  //         value: 'light',
  //         options: [
  //           {
  //             title: '亮主题',
  //             value: 'light'
  //           },
  //           {
  //             title: '暗主题',
  //             value: 'dark'
  //           }
  //         ]
  //       },
  //       nzInlineIndent: {
  //         type: 'number',
  //         value: 24
  //       },
  //       nzMode: {
  //         type: 'select',
  //         value: 'inline',
  //         options: [
  //           { title: '垂直展开', value: 'vertical' },
  //           { title: '水平展开', value: 'horizontal' },
  //           { title: '内部展开', value: 'inline' }
  //         ]
  //       },
  //       nzInDropDown: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzSelectable: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzInlineCollapsed: {
  //         type: 'boolean',
  //         value: 'false'
  //       },
  //       submenu: [
  //         {
  //           title: {
  //             type: 'string',
  //             value: '菜单标题'
  //           },
  //           icon: {
  //             type: 'icon',
  //             value: 'anticon anticon-appstore'
  //           },
  //           nzOpen: {
  //             type: 'boolean',
  //             value: false
  //           },
  //           nzDisabled: {
  //             type: 'boolean',
  //             value: false
  //           },
  //           group: [
  //             {
  //               title: {
  //                 type: 'string',
  //                 value: '标题'
  //               },
  //               items: [
  //                 {
  //                   title: '菜单1',
  //                   nzDisabled: {
  //                     type: 'boolean',
  //                     value: false
  //                   },
  //                   nzSelected: {
  //                     type: 'boolean',
  //                     value: false
  //                   },
  //                   nzData: {
  //                     type: 'string',
  //                     value: 'menu1'
  //                   }
  //                 },
  //                 {
  //                   title: '菜单2',
  //                   nzDisabled: {
  //                     type: 'boolean',
  //                     value: false
  //                   },
  //                   nzSelected: {
  //                     type: 'boolean',
  //                     value: false
  //                   },
  //                   nzData: {
  //                     type: 'string',
  //                     value: 'menu2'
  //                   }
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     outputs: ['click$'],
  //     children: {}
  //   };
  //   this.saveData(data, this.pre + 'nz-menu');
  // }
  // private initNzRate() {
  //   let data = {
  //     selector: 'nz-rate',
  //     inputs: {
  //       nzAutoFocus: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzCount: {
  //         type: 'number',
  //         value: 5
  //       },
  //       nzAllowHalf: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzAllowClear: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzValue: {
  //         type: 'number',
  //         value: 5
  //       },
  //       nzDisabled: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       children: {}
  //     },
  //     outputs: ['change$'],
  //     children: {}
  //   };
  //   this.saveData(data, this.pre + 'nz-rate');
  // }
  // private initNzCheckboxGroup() {
  //   let data = {
  //     selector: 'nz-checkbox-group',
  //     inputs: {
  //       draggable: true,
  //       nzDisabled: {
  //         type: 'boolean',
  //         value: false,
  //         title: '禁用开关'
  //       },
  //       value: {
  //         type: 'list',
  //         value: [
  //           {
  //             label: 'label1',
  //             value: 'falue1',
  //             checked: false
  //           },
  //           {
  //             label: 'label2',
  //             value: 'falue2',
  //             checked: false
  //           }
  //         ],
  //         title: '选项'
  //       }
  //     },
  //     outputs: ['change$'],
  //     chidren: {}
  //   };
  //   this.saveData(data, this.pre + 'nz-checkbox-group');
  // }
  // private initNzCheckbox() {
  //   let data = {
  //     selector: 'nz-checkbox',
  //     inputs: {
  //       draggable: true,
  //       nzAutoFocus: {
  //         type: 'boolean',
  //         value: false,
  //         title: '自动获焦'
  //       },
  //       nzDisabled: {
  //         type: 'boolean',
  //         value: false,
  //         title: '禁用开关'
  //       },
  //       nzIndeterminate: {
  //         type: 'boolean',
  //         value: false,
  //         title: ''
  //       },
  //       nzChecked: {
  //         type: 'boolean',
  //         value: true,
  //         title: '默认状态'
  //       }
  //     },
  //     outputs: ['change$'],
  //     children: {}
  //   };
  //   this.saveData(data, this.pre + 'nz-checkbox');
  // }
  // private initNzSwitch() {
  //   let data = {
  //     selector: 'nz-switch',
  //     inputs: {
  //       value: {
  //         type: 'boolean',
  //         value: true
  //       },
  //       nzSize: {
  //         type: 'select',
  //         value: 'default',
  //         options: [
  //           {
  //             title: '默认',
  //             value: 'default'
  //           },
  //           {
  //             title: '小尺寸',
  //             value: 'small'
  //           }
  //         ]
  //       },
  //       nzLoading: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzDisabled: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       children: {
  //         checkedView: {},
  //         unCheckedView: {}
  //       }
  //     },
  //     outputs: ['change$'],
  //     children: {}
  //   };
  //   this.saveData(data, this.pre + 'nz-switch');
  // }
  // private initNzSelect() {
  //   let data = {
  //     selector: 'nz-select',
  //     inputs: {
  //       nzSize: {
  //         type: 'select',
  //         vlaue: 'default',
  //         options: [
  //           {
  //             title: '默认',
  //             value: 'default'
  //           },
  //           {
  //             title: '大尺寸',
  //             value: 'large'
  //           },
  //           {
  //             title: '小尺寸',
  //             value: 'small'
  //           }
  //         ]
  //       },
  //       nzServerSearch: {
  //         type: 'boolean',
  //         value: false,
  //         title: '搜索'
  //       },
  //       nzMode: {
  //         type: 'select',
  //         value: 'default',
  //         title: '类型',
  //         options: [
  //           {
  //             title: '默认',
  //             value: 'default'
  //           },
  //           {
  //             title: '多选',
  //             value: 'multiple'
  //           },
  //           {
  //             title: '标签',
  //             value: 'tags'
  //           }
  //         ]
  //       },
  //       nzDropdownMatchSelectWidth: {
  //         type: 'boolean',
  //         value: true,
  //         title: '下拉自适应'
  //       },
  //       nzMaxMultipleCount: {
  //         type: 'number',
  //         value: Infinity,
  //         title: '最多选取'
  //       },
  //       nzDropdownStyle: {},
  //       nzNotFoundContent: {
  //         type: 'string',
  //         value: '没有找到',
  //         title: '空提示'
  //       },
  //       nzDropdownClassName: {
  //         type: 'string',
  //         value: '',
  //         title: '下拉样式'
  //       },
  //       nzAutoFocus: {
  //         type: 'boolean',
  //         value: false,
  //         title: '自动获焦点'
  //       },
  //       nzOpen: {
  //         type: 'boolean',
  //         value: false,
  //         title: '是否展开'
  //       },
  //       nzDisabled: {
  //         type: 'boolean',
  //         value: false,
  //         title: '禁用开关'
  //       },
  //       nzAllowClear: {
  //         type: 'boolean',
  //         value: false,
  //         title: '允许清除'
  //       },
  //       nzShowSearch: {
  //         type: 'boolean',
  //         value: false,
  //         title: '显示搜索'
  //       },
  //       nzPlaceHolder: {
  //         type: 'string',
  //         value: '请选择',
  //         title: '提示选择'
  //       },
  //       value: {
  //         type: 'string',
  //         value: 'option',
  //         title: '默认值'
  //       },
  //       options: {
  //         type: 'array',
  //         value: [
  //           {
  //             nzLabel: {
  //               type: 'string',
  //               value: 'group'
  //             },
  //             type: {
  //               type: 'string',
  //               value: 'group'
  //             },
  //             options: {
  //               type: 'group',
  //               value: [
  //                 {
  //                   nzLabel: {
  //                     type: 'string',
  //                     value: 'group'
  //                   },
  //                   nzValue: {
  //                     type: 'string',
  //                     value: 'group'
  //                   },
  //                   nzDisabled: {
  //                     type: 'boolean',
  //                     value: false
  //                   },
  //                   icon: {
  //                     type: 'icon',
  //                     value: 'anticon anticon-user'
  //                   },
  //                   children: null
  //                 }
  //               ]
  //             }
  //           },
  //           {
  //             nzLabel: {
  //               type: 'string',
  //               value: 'option'
  //             },
  //             type: {
  //               type: 'string',
  //               value: 'option'
  //             },
  //             nzValue: {
  //               type: 'string',
  //               value: 'option'
  //             },
  //             nzDisabled: {
  //               type: 'boolean',
  //               value: false
  //             },
  //             icon: {
  //               type: 'icon',
  //               value: 'anticon anticon-user'
  //             },
  //             children: null
  //           }
  //         ],
  //         title: '选项'
  //       },
  //       isAjax: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       page: {
  //         type: 'number',
  //         value: 0
  //       },
  //       params: {},
  //       url: {
  //         type: 'url',
  //         value: 'get?i=2'
  //       },
  //       width: {
  //         type: 'string',
  //         value: '120px'
  //       }
  //     },
  //     outputs: ['change$'],
  //     children: {}
  //   };
  //   this.saveData(data, this.pre + 'nz-select');
  // }
  // private initNzRadio() {
  //   let _test: any = {
  //     selector: 'nz-radio',
  //     inputs: {
  //       value: {
  //         type: 'string',
  //         value: ''
  //       },
  //       isButton: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       options: {
  //         type: 'list',
  //         value: [
  //           {
  //             title: {
  //               type: 'string',
  //               value: '测试'
  //             },
  //             nzValue: {
  //               type: 'string',
  //               value: 'test'
  //             },
  //             nzDisabled: {
  //               type: 'boolean',
  //               value: false
  //             },
  //             nzAutoFocus: {
  //               type: 'boolean',
  //               value: false
  //             }
  //           },
  //           {
  //             title: {
  //               type: 'string',
  //               value: '测试2'
  //             },
  //             nzValue: {
  //               type: 'string',
  //               value: 'test2'
  //             },
  //             nzDisabled: {
  //               type: 'boolean',
  //               value: false
  //             },
  //             nzAutoFocus: {
  //               type: 'boolean',
  //               value: false
  //             }
  //           }
  //         ]
  //       }
  //     },
  //     outputs: ['change$'],
  //     children: {}
  //   };
  //   this.saveData(_test, this.pre + 'nz-radio');
  // }
  // private initNzTextarea() {
  //   let _test: any = {
  //     selector: 'nz-textarea',
  //     inputs: {
  //       value: {
  //         type: 'string',
  //         value: ''
  //       },
  //       nzCompact: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzSearch: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       disabled: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzAutosize: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzSize: {
  //         type: 'select',
  //         value: 'default',
  //         options: [
  //           {
  //             title: '默认',
  //             value: 'default'
  //           },
  //           {
  //             title: '大尺寸',
  //             value: 'large'
  //           },
  //           {
  //             title: '小尺寸',
  //             value: 'small'
  //           }
  //         ]
  //       },
  //       show: {
  //         beforeAddon: {
  //           type: 'boolean',
  //           value: false
  //         },
  //         afterAddon: {
  //           type: 'boolean',
  //           value: false
  //         },
  //         prefix: {
  //           type: 'boolean',
  //           value: false
  //         },
  //         suffix: {
  //           type: 'boolean',
  //           value: false
  //         }
  //       }
  //     },
  //     outputs: ['change$'],
  //     children: {
  //       addonBeforeView: {},
  //       addonAfterView: {},
  //       prefixView: {},
  //       suffixView: {}
  //     }
  //   };
  //   this.saveData(_test, this.pre + 'nz-textarea');
  // }
  // private initNzInput() {
  //   let _test: any = {
  //     selector: 'nz-input',
  //     inputs: {
  //       value: {
  //         type: 'string',
  //         value: ''
  //       },
  //       nzCompact: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzSearch: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       disabled: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzAutosize: {
  //         type: 'boolean',
  //         value: false
  //       },
  //       nzSize: {
  //         type: 'select',
  //         value: 'default',
  //         options: [
  //           {
  //             title: '默认',
  //             value: 'default'
  //           },
  //           {
  //             title: '大尺寸',
  //             value: 'large'
  //           },
  //           {
  //             title: '小尺寸',
  //             value: 'small'
  //           }
  //         ]
  //       },
  //       show: {
  //         beforeAddon: {
  //           type: 'boolean',
  //           value: false
  //         },
  //         afterAddon: {
  //           type: 'boolean',
  //           value: false
  //         },
  //         prefix: {
  //           type: 'boolean',
  //           value: false
  //         },
  //         suffix: {
  //           type: 'boolean',
  //           value: false
  //         }
  //       }
  //     },
  //     outputs: ['change$'],
  //     children: {
  //       addonBeforeView: {},
  //       addonAfterView: {},
  //       prefixView: {},
  //       suffixView: {}
  //     }
  //   };
  //   this.saveData(_test, this.pre + 'nz-input');
  // }
  // private initNzInputNumber() {
  //   let _test: any = {
  //     selector: 'nz-input-number',
  //     inputs: {
  //       nzSize: {
  //         type: 'select',
  //         value: 'default',
  //         title: '尺寸',
  //         options: [
  //           {
  //             title: '默认大小',
  //             value: 'default'
  //           },
  //           {
  //             title: '大尺寸',
  //             value: 'large'
  //           },
  //           {
  //             title: '小尺寸',
  //             value: 'small'
  //           }
  //         ]
  //       },
  //       nzMin: {
  //         type: 'number',
  //         value: 0,
  //         title: '最小值'
  //       },
  //       nzMax: {
  //         type: 'number',
  //         value: 100,
  //         title: '最大值'
  //       },
  //       nzFormatter: {
  //         type: 'string',
  //         value: '${value}分钟',
  //         title: '格式化'
  //       },
  //       nzParser: {
  //         type: 'string',
  //         value: '分钟',
  //         title: '解析'
  //       },
  //       nzPrecision: {
  //         type: 'number',
  //         value: 10,
  //         title: ''
  //       },
  //       nzAutoFocus: {
  //         type: 'boolean',
  //         value: false,
  //         title: '自动获焦'
  //       },
  //       nzDisabled: {
  //         type: 'boolean',
  //         value: false,
  //         title: '禁用开关'
  //       },
  //       nzStep: {
  //         type: 'number',
  //         value: 1,
  //         title: '步长'
  //       },
  //       value: {
  //         type: 'number',
  //         value: 0,
  //         title: '默认值'
  //       }
  //     },
  //     outputs: ['change$'],
  //     children: {}
  //   };
  //   this.saveData(_test, this.pre + 'nz-input-number');
  // }
}
