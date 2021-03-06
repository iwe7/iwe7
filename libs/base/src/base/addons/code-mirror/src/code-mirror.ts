import {
  Component,
  OnInit,
  HostBinding,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  Input
} from '@angular/core';
import { LokiPageDataService, MeepoRender } from 'iwe7/render';
import { Subject } from 'rxjs';
import { map, tap, debounceTime } from 'rxjs/operators';
import * as _CodeMirror from 'codemirror';
const CodeMirror = (<any>window).CodeMirror || _CodeMirror;
import { NzMessageService } from 'iwe7/antd/message';
import { FormGroup, FormBuilder } from '@angular/forms';
// 联想及自动补齐

@Component({
  selector: 'code-mirror',
  templateUrl: './code-mirror.html',
  styleUrls: ['./code-mirror.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CodeMirrorPage implements OnInit {
  @HostBinding('attr.id')
  @Input() id: string;
  @HostBinding('attr.data-title') title: string;
  list: any[] = [];
  editor: any;
  json: any = {};

  eid: number;

  newElement: any = {
    code: '',
    inputs: {},
    outputs: {},
    selector: 'base-page',
    outlet: 'content'
  };

  form: FormGroup;

  save$: Subject<any> = new Subject();
  cancel$: Subject<any> = new Subject();
  change$: Subject<any> = new Subject();

  @ViewChild('textarea') textarea: ElementRef;
  constructor(
    public element: LokiPageDataService,
    public render: MeepoRender,
    public message: NzMessageService,
    public fb: FormBuilder
  ) {
    this.change$
      .pipe(
        debounceTime(200),
        tap(res => {
          this.autoSave();
        })
      )
      .subscribe();
    this.form = this.fb.group({
      code: '',
      inputs: {},
      outputs: {},
      selector: 'base-page',
      outlet: 'content',
      title: ''
    });
  }

  ngOnInit() {
    let json = this.element.getData(item => {
      return item.$loki + '' === this.eid + '';
    });
    // 获取所有下级
    let children = this.element.where(item => {
      return item.fid === json.$loki;
    });
    if (json) {
      let newPage = {
        page: json,
        children: children
      };
      this.editor = CodeMirror.fromTextArea(this.textarea.nativeElement, {
        lineNumbers: true,
        mode: 'application/json',
        theme: 'dracula',
        tabSize: 4
      });
      this.editor.setValue(JSON.stringify(newPage, null, 4));
      this.editor.on('change', () => {
        // this.editor.showHint();
        this.change$.next();
      });
    } else {
      this.message.error('对不起，没有找到相关组件');
    }
  }

  save() {
    this.autoSave();
    this.message.success('保存成功');
  }

  autoSave() {
    try {
      let value = this.editor.getValue();
      let formatValue = JSON.parse(value);
      // 更新
      let data: any = this.element.findAndUpdate(
        item => {
          return item.$loki === this.eid;
        },
        data => {
          return {
            ...data,
            ...formatValue.page
          };
        }
      );
      this.element.autoSave();
      this.render.update(data);

      let children = formatValue.children;
      if (children) {
        children.map(child => {
          this.updateOne(child);
        });
      }
    } catch (err) {}
  }

  updateOne(item) {
    // 更新
    let data: any = this.element.findAndUpdate(
      item => {
        return item.$loki === item.$loki;
      },
      data => {
        return {
          ...data,
          ...item
        };
      }
    );
    this.element.autoSave();
    this.render.update(data);
  }

  cancel() {
    this.render.remove(this.id);
  }
  isVisible: boolean = false;
  add() {
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    // add
    this.newElement.fid = this.eid;
    let data = this.element.add(item => {
      return item.code === this.newElement.code;
    }, this.newElement);
    this.isVisible = false;
    this.render.update(data);
  }
}
