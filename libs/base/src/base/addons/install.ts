import { Injectable } from '@angular/core';
import { RenderApp, RenderAppPage } from 'iwe7/render';
import { LokiAppService } from 'iwe7/render/src/loki-app';
import { LokiPageService } from 'iwe7/render/src/loki-page';
import { CodeMirrorInstallService } from './code-mirror/install';
import { CreateElementInstallService } from './create-element/install';
import { RulerInstallService } from './ruler/install';
import { TableListInstallService } from './table/table-list/install';
import { TableBuilderInstallService } from './table/table-builder/install';


@Injectable({
  providedIn: 'root'
})
export class AddonsInstallService {
  constructor(
    public codeMirror: CodeMirrorInstallService,
    public createElement: CreateElementInstallService,
    public ruler: RulerInstallService,
    public tableList: TableListInstallService,
    public tableBuilder: TableBuilderInstallService,
  ) {
    this.codeMirror.createOrUpdate();
    this.createElement.createOrUpdate();
    this.ruler.createOrUpdate();

    this.tableList.createOrUpdate();
    this.tableBuilder.createOrUpdate();

  }
}
