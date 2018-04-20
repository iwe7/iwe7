import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'devices-iphone8',
        loadChildren: './devices.module#DevicesModule'
      },
      {
        path: 'devices-iphonex',
        loadChildren: './devices.module#DevicesModule'
      }
    ])
  ]
})
export class DevicesRoutesModule {}
