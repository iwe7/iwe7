import { Injectable } from '@angular/core';
// import { InitService } from './core/init.service';
import { tap, map, switchMap } from 'rxjs/operators';
import { MeepoRender } from 'meepo-render';
@Injectable({
  providedIn: 'root'
})
export class CreateElementService {
  forms: any = {
    selector: 'nz-form',
    inputs: {
      items: {
        value: []
      },
      url: {
        value: 'elements/create.empty'
      }
    },
    outputs: ['submit$', 'change$'],
    children: {}
  };
  constructor(
    // private init: InitService,
     private _render: MeepoRender) {}

  renderFromJson() {}

  render(code: string, setting: any, view?: any) {
    this.forms.inputs.items.value = [];
    // this.init
    //   .getElements({
    //     type: code
    //   })
    //   .pipe(
    //     // author
    //     tap((res: any) => {
    //       this.createField('input', 'author', '作者', res);
    //     }),
    //     // version
    //     tap((res: any) => {
    //       this.createField('input', 'version', '版本号', res);
    //     }),
    //     // selector
    //     tap((res: any) => {
    //       this.createField('input', 'selector', '选择器', res);
    //     }),
    //     // title
    //     tap((res: any) => {
    //       this.createField('input', 'title', '名字', res);
    //     }),
    //     // desc
    //     tap((res: any) => {
    //       this.createField('textarea', 'desc', '简介', res);
    //     }),
    //     // price
    //     tap((res: any) => {
    //       this.createField('number', 'price', '价格', res, '元');
    //     }),

    //     // 父容器
    //     tap(res => {
    //       this.createField('select', 'father', '父容器', res, [
    //         {
    //           title: '自身',
    //           value: null,
    //           icon: 'anticon anticon-user'
    //         },
    //         {
    //           title: '展示',
    //           value: 'nz-layout',
    //           icon: 'anticon anticon-home'
    //         },
    //         {
    //           title: '表单',
    //           value: 'nz-form',
    //           icon: 'anticon anticon-form'
    //         },
    //         {
    //           title: '详情',
    //           value: 'nz-detail',
    //           icon: 'anticon anticon-profile'
    //         }
    //       ]);
    //     }),
    //     // 类型
    //     tap(res => {
    //       this.createField('select', 'type', '场景', res, [
    //         {
    //           title: '电脑页',
    //           value: 'pc',
    //           icon: 'anticon anticon-ie'
    //         },
    //         {
    //           title: '手机页',
    //           value: 'mobile',
    //           icon: 'anticon anticon-html5'
    //         },
    //         {
    //           title: '微信号',
    //           value: 'wechat',
    //           icon: 'anticon anticon-wechat'
    //         },
    //         {
    //           title: '小程序',
    //           value: 'wxapp',
    //           icon: 'anticon anticon-wechat'
    //         },
    //         {
    //           title: '安卓app',
    //           value: 'android',
    //           icon: 'anticon anticon-android'
    //         },
    //         {
    //           title: '苹果app',
    //           value: 'ios',
    //           icon: 'anticon anticon-apple'
    //         }
    //       ]);
    //     }),
    //     map((res: any) => res.setting),
    //     // inputs
    //     tap((res: any) => {
    //       this.createField('inputs', 'inputs', '设置项目', res);
    //     }),
    //     // outputs
    //     tap((res: any) => {
    //       this.createField('outputs', 'outputs', '输出项目', res);
    //     }),
    //     // children
    //     tap((res: any) => {
    //       this.createField('children', 'children', '内部元素', res);
    //     }),
    //     tap(res => console.log(res)),
    //     switchMap(res => {
    //       return this._render.compiler(this.forms, setting);
    //     }),
    //     map((res: any) => res.data),
    //     // tap
    //     tap(res => console.log(res))
    //   )
    //   .subscribe(res => {
    //     // sub.unsubscribe();
    //   });
  }

  private createField(type, name, title, res, setting?: any) {
    let children = this.getFieldByType(type, res[name], setting);
    this.addFormItem(title, res[name], name, children);
  }

  private addFormItem(
    _label: string,
    _value: string,
    _name: string,
    _item: any
  ) {
    let item = {
      label: {
        value: _label
      },
      value: {
        value: _value
      },
      name: {
        value: _name
      },
      children: _item
    };
    let { value } = this.forms.inputs.items;
    value = [...value, item];
    this.forms.inputs.items.value = value;
  }

  private getFieldByType(key: string, value: any, setting?: any) {
    if (key === 'input') {
      return this.createInput(value);
    }
    if (key === 'string') {
      return this.createInput(value);
    }
    if (key === 'textarea') {
      return this.createTextarea(value);
    }
    if (key === 'number') {
      return this.createNumber(value, setting);
    }
    if (key === 'select') {
      return this.createSelect(value, setting);
    }
    if (key === 'boolean') {
      return this.createBoolean(value, setting);
    }
    if (key === 'inputs') {
      return this.createInputs(value);
    }
  }

  private createBoolean(value, setting) {
    return {
      selector: 'nz-switch',
      inputs: {
        value: {
          value: value
        }
      },
      outputs: ['change$'],
      children: {}
    };
  }

  private createInputs(inputs) {
    let opts = {
      selector: 'nz-form',
      inputs: {
        items: {
          value: []
        },
        footer: null
      },
      outputs: ['change$']
    };
    if (inputs) {
      for (let input in inputs) {
        let item = inputs[input];
        let com = this.getFieldByType(item.type, item.value, item.options);
        opts.inputs.items.value.push({
          label: {
            value: item.title || input
          },
          name: {
            value: input
          },
          value: {
            value: item.value
          },
          children: com
        });
      }
    }
    return opts;
  }

  private createSelect(value: any, opts: any) {
    let options = [];
    if (opts) {
      opts = opts || [];
      try {
        opts.map(res => {
          options.push({
            nzLabel: {
              value: res.title
            },
            type: {
              value: 'option'
            },
            nzValue: {
              value: res.value
            },
            icon: {
              value: res.icon
            }
          });
        });
      } catch (err) {
        console.log(opts);
      }
    }
    return {
      selector: 'nz-select',
      inputs: {
        value: {
          value: value
        },
        options: {
          value: options
        },
        nzPlaceHolder: {
          value: '请选择'
        },
        isAjax: {
          value: false
        }
      },
      outputs: ['change$'],
      children: {}
    };
  }

  private createNumber(value: number, unit?: string) {
    unit = unit || '';
    return {
      selector: 'nz-input-number',
      inputs: {
        nzMin: {
          value: 0
        },
        nzMax: {
          value: 9999
        },
        nzFormatter: {
          value: '${value}' + unit
        },
        nzParser: {
          value: unit
        },
        nzStep: {
          value: 10
        },
        value: {
          value: value
        }
      },
      outputs: ['change$'],
      children: {}
    };
  }

  private createInput(value: string) {
    return {
      selector: 'nz-input',
      inputs: {
        value: {
          type: 'string',
          value: value
        },
        show: {
          beforeAddon: {
            type: 'boolean',
            value: false
          },
          afterAddon: {
            type: 'boolean',
            value: false
          },
          prefix: {
            type: 'boolean',
            value: false
          },
          suffix: {
            type: 'boolean',
            value: false
          }
        }
      },
      outputs: ['change$'],
      children: {}
    };
  }

  private createTextarea(value: string) {
    return {
      selector: 'nz-textarea',
      inputs: {
        value: {
          type: 'string',
          value: value
        },
        show: {
          beforeAddon: {
            type: 'boolean',
            value: false
          },
          afterAddon: {
            type: 'boolean',
            value: false
          },
          prefix: {
            type: 'boolean',
            value: false
          },
          suffix: {
            type: 'boolean',
            value: false
          }
        }
      },
      outputs: ['change$'],
      children: {}
    };
  }
}
