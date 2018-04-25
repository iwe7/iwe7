import { Injectable } from '@angular/core';
import { RenderApp, RenderAppPage } from 'iwe7/render';
import { LokiAppService } from 'iwe7/render/src/loki-app';
import { LokiPageService } from 'iwe7/render/src/loki-page';
import { ElementDesignInstallService } from './element-design/install';
import { CodeMirrorInstallService } from './code-mirror/install';

@Injectable({
  providedIn: 'root'
})
export class AddonsInstallService {
  constructor(
    public elementDesign: ElementDesignInstallService,
    public codeMirror: CodeMirrorInstallService
  ) {
    this.elementDesign.createOrUpdate();
    this.codeMirror.createOrUpdate();
  }
}
