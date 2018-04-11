import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iwe7CoreModule } from 'iwe7/core';
import { Iwe7PipesModule } from 'iwe7/pipes';
import { ReactiveFormsModule } from '@angular/forms';
import { Iwe7TouchModule } from 'iwe7/touch';

@NgModule({
  imports: [
    CommonModule,
    // 核心模块
    Iwe7CoreModule,
    Iwe7PipesModule,
    ReactiveFormsModule,
    Iwe7TouchModule
  ],
  exports: [
    Iwe7CoreModule,
    Iwe7PipesModule,
    ReactiveFormsModule,
    Iwe7TouchModule
  ]
})
export class Iwe7SharedModule {}
