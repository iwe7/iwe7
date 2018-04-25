import { Injectable } from '@angular/core';
import { RenderApp, RenderAppPage } from 'iwe7/render';
import { LokiAppService } from 'iwe7/render/src/loki-app';
import { LokiPageService } from 'iwe7/render/src/loki-page';
import { CodeMirrorInstallService } from './code-mirror/install';
import { CreateElementInstallService } from './create-element/install';

@Injectable({
  providedIn: 'root'
})
export class AddonsInstallService {
  constructor(
    public codeMirror: CodeMirrorInstallService,
    public createElement: CreateElementInstallService
  ) {
    this.codeMirror.createOrUpdate();
    this.createElement.createOrUpdate();
  }
}
