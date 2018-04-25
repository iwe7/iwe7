import { Injectable } from '@angular/core';
import { RenderApp, RenderAppPage } from 'iwe7/render';
import { LokiAppService } from 'iwe7/render/src/loki-app';
import { LokiPageService } from 'iwe7/render/src/loki-page';
@Injectable({
  providedIn: 'root'
})
export class AppPreviewService {
  app: RenderApp;
  constructor(
    public appLoki: LokiAppService,
    public pageLoki: LokiPageService
  ) {}

  addPage() {
    let page: RenderAppPage = {
      // 名称
      title: '精彩案例',
      code: 'app-preview.home',
      share: {
        title: '',
        icon: '',
        desc: '',
        link: ''
      },
      // 应用ID
      appId: this.app.$loki,
      isDefault: true,
      elements: []
    };
    this.pageLoki.add(item => {
      return item.appId === page.appId && item.code === page.code;
    }, page);
  }
  // 测试
  test() {}
  // 安装
  install() {
    // 应用展示搜索查询
    let app: RenderApp = {
      // 标题
      title: '案例大厅',
      // 简介
      desc: '用于展示应用案例',
      // 作者
      author: 'imeepos',
      // 路由
      links: [],
      // 图标
      icon: '',
      // 预览
      swipers: [],
      // 页面
      pages: [],
      // 应用类型
      appType: 'pc',
      // 应用来源
      appFrom: 'system',
      code: 'imeepos.app-preview'
    };
    this.app = this.appLoki.add(item => {
      return item.code === 'imeepos.app-preview';
    }, app);

    // 应用展示搜索查询
    let builder: RenderApp = {
      // 标题
      title: '应用构建工具',
      // 简介
      desc: '用于构建应用',
      // 作者
      author: 'imeepos',
      // 路由
      links: [],
      // 图标
      icon: '',
      // 预览
      swipers: [],
      // 页面
      pages: [],
      // 应用类型
      appType: 'pc',
      // 应用来源
      appFrom: 'system',
      code: 'imeepos.app-builder'
    };
    this.appLoki.add(item => {
      return item.code === 'imeepos.app-builder';
    }, builder);

    // 应用展示搜索查询
    let tasks: RenderApp = {
      // 标题
      title: '任务管理',
      // 简介
      desc: '用于管理跑腿任务',
      // 作者
      author: 'imeepos',
      // 路由
      links: [],
      // 图标
      icon: '',
      // 预览
      swipers: [],
      // 页面
      pages: [],
      // 应用类型
      appType: 'pc',
      // 应用来源
      appFrom: 'system',
      code: 'imeepos.runner-task'
    };
    this.appLoki.add(item => {
      return item.code === 'imeepos.runner-task';
    }, tasks);

    // 应用展示搜索查询
    let runners: RenderApp = {
      // 标题
      title: '跑腿管理',
      // 简介
      desc: '用于管理跑腿人员',
      // 作者
      author: 'imeepos',
      // 路由
      links: [],
      // 图标
      icon: '',
      // 预览
      swipers: [],
      // 页面
      pages: [],
      // 应用类型
      appType: 'pc',
      // 应用来源
      appFrom: 'system',
      code: 'imeepos.runner-manager'
    };
    this.appLoki.add(item => {
      return item.code === 'imeepos.runner-manager';
    }, runners);
  }
  // 更新
  update() {}
  // 卸载
  uninstall() {}
}
