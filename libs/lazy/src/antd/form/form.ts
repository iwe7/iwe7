import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  EventEmitter,
  HostBinding,
  ElementRef,
  ViewEncapsulation,
  Input
} from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MeepoRender } from 'meepo-render';
import { IcssService } from 'iwe7-icss';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'iwe7-form',
  templateUrl: './form.html',
  styleUrls: ['./form.scss']
})
export class FormComponent implements OnInit {
  isHorizontal: any = {
    type: 'boolean',
    value: true
  };
  items: any = {
    type: 'form',
    value: [
      {
        label: {
          label: 'string',
          value: 'label1'
        },
        name: {
          name: 'string',
          value: 'name1'
        },
        value: {
          type: 'string',
          value: 'value1'
        },
        children: {
          selector: 'nz-input',
          inputs: {},
          outputs: [],
          children: {}
        }
      },
      {
        label: {
          label: 'string',
          value: 'label2'
        },
        name: {
          name: 'string',
          value: 'name2'
        },
        value: {
          type: 'string',
          value: 'value2'
        },
        children: {
          selector: 'nz-input',
          inputs: {},
          outputs: [],
          children: {}
        }
      }
    ],
    types: []
  };
  footer: any = {
    selector: 'nz-button',
    inputs: {
      text: {
        value: ''
      },
      nzLoading: {
        value: false
      }
    },
    outputs: ['click$'],
    children: {
      content: [
        {
          selector: 'nz-span',
          inputs: {
            text: {
              value: '提交数据'
            }
          }
        },
        {
          selector: 'nz-icon',
          inputs: {
            name: {
              value: 'upload'
            }
          }
        }
      ]
    }
  };
  url: any = {
    type: 'url',
    value: ''
  };

  validateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private render: MeepoRender,
    private http: HttpClient
  ) {
    this.validateForm = this.fb.group({});
  }

  labelWidth: number = 8;
  controlWidth: number = 24 - this.labelWidth;
  ngOnInit() {
    this.items.value.map(res => {
      if (!this.validateForm.contains(res.name.value)) {
        this.validateForm.addControl(
          res.name.value,
          this.fb.control(res.value.value, [])
        );
      }
    });
    this.validateForm.valueChanges.subscribe(res => {
      this.change$.next(res);
    });
  }

  @ViewChild('footer', {
    read: ViewContainerRef
  })
  footerView: ViewContainerRef;

  @ViewChild('content', {
    read: ViewContainerRef
  })
  content: ViewContainerRef;

  submit$: Subject<any> = new Subject();
  change$: Subject<any> = new Subject();

  submitForm() {
    let value = this.validateForm.value;
    if (this.url && this.url.value) {
      let url =
        'https://meepo.com.cn/app/index.php?i=2&c=entry&do=open&m=runner_open&open=' +
        this.url.value;
      this.http.post(url, value).subscribe((res: any) => {
        this.footer.inputs.nzLoading.value = false;
        if (res) {
          if (res.code === 0 + '') {
            this.submit$.next(value);
          } else {
            console.log(res);
          }
        } else {
          console.log('网络错误');
        }
      });
    } else {
      this.submit$.next(value);
    }
  }

  setView(e, item) {
    if (item.children) {
      this.render
        .compiler(item.children, e)
        .pipe(
          tap((res: any) => {
            let { type, data } = res;
            this.validateForm.get(item.name.value).setValue(data);
          })
        )
        .subscribe();
    }
  }

  setFooterView(e) {
    if (this.footer) {
      this.render.compiler(this.footer, e).subscribe((res: any) => {
        if (res.type === 'click$') {
          this.footer.inputs.nzLoading.value = true;
          this.submitForm();
        }
      });
    }
  }
}
