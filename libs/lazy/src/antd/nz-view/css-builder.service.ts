import { Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';
import { from } from 'rxjs';
import { map, tap, takeLast, switchMap } from 'rxjs/operators';
import { CssStyle } from './css-style';
import { map as _map } from 'underscore';
// 页面管理
@Injectable({
  providedIn: 'root'
})
export class CssBuilderService {
  units: any[] = ['px', 'vh', 'vw', '%', 'em', 'rem'];
  positionData: any = {
    left: '左',
    right: '右',
    top: '上',
    bottom: '下'
  };
  otherStyle: any = {
    // 字体
    fontSize: '字号'
  };
  sizeData: any = {
    width: '宽度',
    height: '高度',
    lineHeight: '行高',
    // 外距
    marginTop: '上外距',
    marginRight: '右外距',
    marginBottom: '下外距',
    marginLeft: '左外距',
    // 内距
    paddingLeft: '左内距',
    paddingRight: '右内距',
    paddingTop: '上内距',
    paddingBottom: '下内距',
    // 圆角
    borderBottomLeftRadius: '下左圆角',
    borderBottomRightRadius: '下右圆角',
    borderTopLeftRadius: '上左圆角',
    borderTopRightRadius: '上右圆角',
    // 边宽
    borderBottomWidth: '下边宽',
    borderLeftWidth: '左边宽',
    borderRightWidth: '右边宽',
    borderTopWidth: '上边宽'
  };
  builderStyle = new CssStyle();
  opt: any = {};

  getSizeItems(ele: HTMLElement) {
    let keys = [];
    let styles = window.getComputedStyle(ele, null);
    for (let key in this.sizeData) {
      let value = parseInt(styles[key], 10);
      keys.push({
        label: {
          value: this.sizeData[key]
        },
        name: {
          value: key
        },
        value: {
          value: value
        },
        children: this.createNumber({
          name: key,
          value: value,
          title: this.sizeData[key],
          type: 'number',
          unit: 'px'
        })
      });
    }
    return keys;
  }

  constructor(private render: MeepoRender) {
    this.builderStyle.width = 'auto';
    this.builderStyle.position = 'absolute';
    this.builderStyle.right = '0px';
    this.builderStyle.top = '0px';
    this.builderStyle.bottom = '0px';
    this.builderStyle.display = 'flex';
    this.builderStyle.flexDirection = 'column';
    this.builderStyle.backgroundColor = '#333';
    this.builderStyle.color = '#ccc';
  }
  ele: ElementRef;
  builder(view, ele) {
    this.opt = {
      selector: 'nz-tabs',
      inputs: {
        nzType: {
          value: 'card'
        },
        tabs: {
          value: [
            {
              title: {
                value: '尺寸'
              },
              children: {
                selector: 'nz-form',
                inputs: {
                  items: {
                    value: this.getSizeItems(ele)
                  }
                },
                outputs: ['change$']
              }
            },
            {
              title: {
                value: '颜色'
              },
              children: {
                selector: 'nz-form',
                inputs: {
                  items: {
                    value: this.getSizeItems(ele)
                  }
                },
                outputs: ['change$']
              }
            },
            {
              title: {
                value: '定位'
              },
              children: {
                selector: 'nz-form',
                inputs: {
                  items: {
                    value: this.getSizeItems(ele)
                  }
                },
                outputs: ['change$']
              }
            }
          ]
        }
      },
      outputs: ['change$'],
      children: {
        content: []
      }
    };
    view.clear();
    return this.render.compiler(this.opt, view);
  }

  addField(opts: any) {
    let item;
    if (opts.type === 'number') {
      item = this.createNumber(opts);
    } else {
      item = this.createInput(opts);
    }
    this.opt.inputs.items.value.push({
      label: {
        value: opts.title
      },
      name: {
        value: opts.name
      },
      value: {
        value: opts.value
      },
      children: item
    });
  }

  createSlider(opts: any) {
    return {
      selector: 'nz-slider',
      inputs: {
        value: {
          type: 'string',
          value: opts.value || ''
        },
        nzDefaultValue: {
          value: opts.value || 0
        },
        nzMax: {
          value: 1500
        },
        nzStep: {
          value: 1
        },
        nzDots: {
          value: false
        },
        nzTipFormatter: {
          value: '${value}' + opts.unit
        },
        nzParser: {
          value: opts.unit
        },
        nzSize: {
          value: 'small'
        },
        nzMarks: {
          value: [
            {
              style: {
                value: {}
              },
              label: {
                value: '0px'
              },
              position: {
                value: 0
              }
            },
            {
              style: {
                value: {}
              },
              label: {
                value: '1500px'
              },
              position: {
                value: 1500
              }
            }
          ]
        }
      },
      outputs: ['change$']
    };
  }

  createNumber(opts: any) {
    return {
      selector: 'nz-input-number',
      inputs: {
        value: {
          type: 'string',
          value: opts.value || ''
        },
        nzMax: {
          value: 1500
        },
        nzStep: {
          value: 1
        },
        nzDots: {
          value: false
        },
        nzFormatter: {
          value: '${value}' + opts.unit
        },
        nzParser: {
          value: opts.unit
        }
      },
      outputs: ['change$']
    };
  }

  createInput(opts: any) {
    return {
      selector: 'nz-input',
      inputs: {
        value: {
          type: 'string',
          value: opts.value || ''
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
      }
    };
  }
}
