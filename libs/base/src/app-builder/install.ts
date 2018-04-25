import { Injectable } from '@angular/core';
import { RenderOptions } from 'iwe7/render';

@Injectable({
  providedIn: 'root'
})
export class AppBuilderService {
  title: string = '应用助手';
  type: string[] = ['pc'];
  element_Type: string = 'app';

  config: RenderOptions = {
    title: '应用助手',
    type: ['pc'],
    element_Type: 'app',
    selector: 'app-page',
    inputs: {
      title: '应用助手'
    },
    outputs: {},
    author: ['imeepos'],
    fid: 0,
    outlet: 'content',
    role: ['all'],
    isDefault: true,
  };
  constructor() {}
}
