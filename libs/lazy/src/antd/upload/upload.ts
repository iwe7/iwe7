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
@Component({
  selector: 'iwe7-upload',
  templateUrl: './upload.html',
  styleUrls: ['./upload.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadComponent implements OnInit {
  nzType: any = {
    type: 'select',
    value: 'select',
    options: [
      {
        // 'select' | 'drag'
        title: '选择',
        value: 'select'
      },
      {
        title: '拖拽',
        value: 'drag'
      }
    ]
  };
  nzLimit: any = {
    type: 'number',
    value: 0
  };
  nzSize: any = {
    type: 'number',
    value: 0
  };
  nzFileType: any = {
    type: 'string',
    value: ''
  };
  nzAccept: any = {
    type: 'list',
    value: [],
    options: []
  };
  nzAction: any = {
    type: 'string',
    value: 'https://jsonplaceholder.typicode.com/posts/'
  };

  nzDisabled: any = {
    type: 'boolean',
    value: false
  };

  nzListType: any = {
    type: 'select',
    value: 'picture-card',
    options: [
      {
        title: '文字',
        value: 'text'
      },
      {
        title: '图片',
        value: 'picture'
      },
      {
        title: '卡片',
        value: 'picture-card'
      }
    ]
  };

  nzMultiple: any = {
    type: 'boolean',
    value: false
  };

  nzName: any = {
    type: 'string',
    value: 'file'
  };

  nzShowUploadList: any = {
    type: 'boolean',
    value: true
  };

  nzShowButton: any = {
    type: 'boolean',
    value: true
  };

  nzWithCredentials: any = {
    type: 'boolean',
    value: false
  };

  @ViewChild('content', {
    read: ViewContainerRef
  })
  content: ViewContainerRef;

  nzFileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  previewImage = '';
  previewVisible = false;

  change$: Subject<any> = new Subject();
  preview$: Subject<any> = new Subject();
  remove$: Subject<any> = new Subject();

  nzPreview = file => {
    this.preview$.next(file);
  };

  nzRemove = file => {
    this.remove$.next(file);
  };

  nzBeforeUpload(file, fileList) {
    return true;
  }

  text: any = {
    type: 'string',
    value: '选择图片'
  };

  ngOnInit() {}

  change(list) {
    this.change$.next(list);
  }
}
