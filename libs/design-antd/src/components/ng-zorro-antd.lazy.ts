import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'nz-affix',
        loadChildren: './affix/nz-affix.module#NzAffixModule'
      },
      {
        path: 'nz-button',
        loadChildren: './button/nz-button.module#NzButtonModule'
      },
      {
        path: 'nz-button-group',
        loadChildren: './button/nz-button.module#NzButtonModule'
      },
      {
        path: 'nz-avatar',
        loadChildren: './avatar/nz-avatar.module#NzAvatarModule'
      },
      {
        path: 'nz-row',
        loadChildren: './grid/nz-grid.module#NzGridModule'
      },
      {
        path: 'nz-col',
        loadChildren: './grid/nz-grid.module#NzGridModule'
      },
      {
        path: 'nz-alert',
        loadChildren: './alert/nz-alert.module#NzAlertModule'
      },
      {
        path: 'nz-anchor',
        loadChildren: './anchor/nz-anchor.module#NzAnchorModule'
      },
      {
        path: 'nz-autocomplete',
        loadChildren:
          './auto-complete/nz-autocomplete.module#NzAutocompleteModule'
      },
      {
        path: 'nz-back-top',
        loadChildren: './back-top/nz-back-top.module#NzBackTopModule'
      },
      {
        path: 'nz-badge',
        loadChildren: './badge/nz-badge.module#NzBadgeModule'
      },
      {
        path: 'nz-bread-crumb',
        loadChildren: './breadcrumb/nz-breadcrumb.module#NzBreadCrumbModule'
      },
      {
        path: 'nz-card',
        loadChildren: './card/nz-card.module#NzCardModule'
      },
      {
        path: 'nz-carousel',
        loadChildren: './carousel/nz-carousel.module#NzCarouselModule'
      },
      {
        path: 'nz-cascader',
        loadChildren: './cascader/nz-cascader.module#NzCascaderModule'
      },
      {
        path: 'nz-checkbox',
        loadChildren: './checkbox/nz-checkbox.module#NzCheckboxModule'
      },
      {
        path: 'nz-collapse',
        loadChildren: './collapse/nz-collapse.module#NzCollapseModule'
      },
      {
        path: 'nz-divider',
        loadChildren: './divider/nz-divider.module#NzDividerModule'
      },
      {
        path: 'nz-dropdown',
        loadChildren: './dropdown/nz-dropdown.module#NzDropDownModule'
      },
      {
        path: 'nz-input',
        loadChildren: './input/nz-input.module#NzInputModule'
      },
      {
        path: 'nz-input-number',
        loadChildren:
          './input-number/nz-input-number.module#NzInputNumberModule'
      },
      {
        path: 'nz-layout',
        loadChildren: './layout/nz-layout.module#NzLayoutModule'
      },
      {
        path: 'nz-list',
        loadChildren: './list/nz-list.module#NzListModule'
      },
      {
        path: 'nz-menu',
        loadChildren: './menu/nz-menu.module#NzMenuModule'
      },
      {
        path: 'nz-message',
        loadChildren: './message/nz-message.module#NzMessageModule'
      },
      {
        path: 'nz-tree',
        loadChildren: './tree/nz-tree.module#NzTreeModule'
      },
      {
        path: 'nz-form',
        loadChildren: './form/nz-form.module#NzFormModule'
      },
      {
        path: 'nz-form-control',
        loadChildren: './form/nz-form.module#NzFormModule'
      },
      {
        path: 'nz-form-item',
        loadChildren: './form/nz-form.module#NzFormModule'
      },
      {
        path: 'nz-form-label',
        loadChildren: './form/nz-form.module#NzFormModule'
      },
      {
        path: 'nz-rate',
        loadChildren: './rate/nz-rate.module#NzRateModule'
      },
      {
        path: 'nz-switch',
        loadChildren: './switch/nz-switch.module#NzSwitchModule'
      },
      {
        path: 'nz-select',
        loadChildren: './select/nz-select.module#NzSelectModule'
      },
      {
        path: 'nz-option',
        loadChildren: './select/nz-select.module#NzSelectModule'
      }
    ])
  ]
})
export class NgZorroAntdLazyModule {}
