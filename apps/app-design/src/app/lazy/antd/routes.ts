import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'nz-input',
        loadChildren: './input/input.module#InputModule'
      },
      {
        path: 'nz-input-number',
        loadChildren: './input-number/input-number.module#InputNumberModule'
      },
      {
        path: 'nz-radio',
        loadChildren: './radio/radio.module#RadioModule'
      },
      {
        path: 'nz-select',
        loadChildren: './select/select.module#SelectModule'
      },
      {
        path: 'nz-switch',
        loadChildren: './switch/switch.module#SwitchModule'
      },
      {
        path: 'nz-checkbox',
        loadChildren: './checkbox/checkbox.module#CheckboxModule'
      },
      {
        path: 'nz-checkbox-group',
        loadChildren: './checkbox/checkbox.module#CheckboxModule'
      },
      {
        path: 'nz-menu',
        loadChildren: './menu/menu.module#MenuModule'
      },
      {
        path: 'nz-rate',
        loadChildren: './rate/rate.module#RateModule'
      },
      {
        path: 'nz-tag',
        loadChildren: './tag/tag.module#TagModule'
      },
      {
        path: 'nz-slider',
        loadChildren: './slider/slider.module#SliderModule'
      },
      {
        path: 'nz-timeline',
        loadChildren: './timeline/timeline.module#TimelineModule'
      },
      {
        path: 'nz-upload',
        loadChildren: './upload/upload.module#UploadModule'
      },
      {
        path: 'nz-button',
        loadChildren: './button/button.module#ButtonModule'
      },
      {
        path: 'nz-icon',
        loadChildren: './icon/icon.module#IconModule'
      },
      {
        path: 'nz-span',
        loadChildren: './span/span.module#SpanModule'
      },
      {
        path: 'nz-textarea',
        loadChildren: './textarea/textarea.module#TextareaModule'
      },
      {
        path: 'nz-form',
        loadChildren: './form/form.module#FormModule'
      },
      {
        path: 'nz-table',
        loadChildren: './table/table.module#TableModule'
      },
      {
        path: 'nz-tabs',
        loadChildren: './tabs/tabs.module#TabsModule'
      },
      {
        path: 'nz-layout',
        loadChildren: './layout/layout.module#LayoutModule'
      },
      {
        path: 'nz-carousel',
        loadChildren: './carousel/carousel.module#CarouselModule'
      },
      {
        path: 'nz-dropdown',
        loadChildren: './dropdown/dropdown.module#DropdownModule'
      },
      {
        path: 'nz-steps',
        loadChildren: './steps/steps.module#StepsModule'
      },
      {
        path: 'nz-card',
        loadChildren: './card/card.module#CardModule'
      },
      {
        path: 'nz-breadcrumb',
        loadChildren: './breadcrumb/breadcrumb.module#BreadcrumbModule'
      },
      {
        path: 'nz-pagination',
        loadChildren: './pagination/pagination.module#PaginationModule'
      },
      {
        path: 'nz-cascader',
        loadChildren: './cascader/cascader.module#CascaderModule'
      },
      {
        path: 'nz-back-top',
        loadChildren: './back-top/back-top.module#BackTopModule'
      },
      {
        path: 'nz-affix',
        loadChildren: './affix/affix.module#AffixModule'
      },
      {
        path: 'nz-tooltip',
        loadChildren: './tooltip/tooltip.module#TooltipModule'
      },
      {
        path: 'nz-avatar',
        loadChildren: './avatar/avatar.module#AvatarModule'
      },
      {
        path: 'nz-tree',
        loadChildren: './tree/tree.module#TreeModule'
      },
      {
        path: 'nz-alert',
        loadChildren: './alert/alert.module#AlertModule'
      },
      {
        path: 'nz-modal',
        loadChildren: './modal/modal.module#ModalModule'
      },
      {
        path: 'nz-popconfirm',
        loadChildren: './popconfirm/popconfirm.module#PopconfirmModule'
      },
      {
        path: 'nz-progress',
        loadChildren: './progress/progress.module#ProgressModule'
      },
      {
        path: 'nz-spin',
        loadChildren: './spin/spin.module#SpinModule'
      },
      {
        path: 'nz-anchor',
        loadChildren: './anchor/anchor.module#AnchorModule'
      },
      {
        path: 'nz-divider',
        loadChildren: './divider/divider.module#DividerModule'
      },
      {
        path: 'nz-grid',
        loadChildren: './grid/grid.module#GridModule'
      },
      {
        path: 'nz-view',
        loadChildren: './view/view.module#ViewModule'
      },
      {
        path: 'native-input',
        loadChildren: './native-input/native-input.module#NativeInputModule'
      },
      {
        path: 'nz-dnd',
        loadChildren: './dnd/dnd.module#DndModule'
      }
    ])
  ]
})
export class AntdRoutesModule {}
