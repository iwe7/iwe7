import {
  Component,
  OnInit,
  HostBinding,
  ElementRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { LokiPageDataService, MeepoRender } from 'iwe7/render';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import * as CodeMirror from 'codemirror';
import { NzMessageService } from 'iwe7/antd/message';
@Component({
  selector: 'code-mirror',
  templateUrl: './code-mirror.html',
  styleUrls: ['./code-mirror.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CodeMirrorPage implements OnInit {
  @HostBinding('attr.id') id: string;
  @HostBinding('attr.data-title') title: string;
  list: any[] = [];
  editor: any;
  json: any = {
    message: '',
    code: 200,
    response: {
      totalCount: 1,
      results: [
        {
          status: 'deployed',
          login_port: 22,
          role_info: null,
          created: '2017-06-19 09:58:04',
          login_user: 'root',
          hostname: 'deploy-226',
          login_ip: '172.24.6.226',
          id: '1147edbde1494df696019fdb094be43d'
        }
      ],
      pageSize: 5,
      page: 1
    },
    success: true
  };

  eid: number;

  save$: Subject<any> = new Subject();
  cancel$: Subject<any> = new Subject();

  @ViewChild('textarea') textarea: ElementRef;
  constructor(
    public element: LokiPageDataService,
    public render: MeepoRender,
    public message: NzMessageService
  ) {}

  ngOnInit() {
    let json = this.element.getData(item => {
      return item.$loki + '' === this.eid + '';
    });
    let editorJson = {
      selector: json.selector,
      inputs: json.inputs,
      outputs: json.outputs,
      fid: json.fid,
      code: json.code,
      title: json.title || ''
    };
    this.editor = CodeMirror.fromTextArea(this.textarea.nativeElement, {
      lineNumbers: true,
      mode: 'application/json',
      theme: '3024-night',
      tabSize: 4
    });
    this.editor.setValue(JSON.stringify(editorJson, null, 4));
  }

  save() {
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
          ...formatValue
        };
      }
    );
    this.element.autoSave();
    this.render.update(data);
    this.message.success('保存成功');
  }

  cancel() {
    this.render.remove(this.id);
  }
}
