import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DevicesLazyModule,
  DeviceIphone8Component,
  DeviceIphonexComponent
} from 'iwe7-devices';
@NgModule({
  imports: [CommonModule, DevicesLazyModule],
  declarations: []
})
export class DevicesModule {
  get(key: string) {
    if (key === 'devices-iphone8') {
      return DeviceIphone8Component;
    }
    if (key === 'devices-iphonex') {
      return DeviceIphonexComponent;
    }
  }
}
