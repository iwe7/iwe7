import { NgModule, Injector, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { TestElementsComponent } from './test-elements/test-elements.component';
import { registerElements } from './elements.helper';
export const components: { key: string; component: Type<any> }[] = [
  {
    key: 'test-elements',
    component: TestElementsComponent
  }
];

@NgModule({
  imports: [CommonModule],
  declarations: [TestElementsComponent],
  entryComponents: [TestElementsComponent]
})
export class Iwe7ElementsModule {
  constructor(injector: Injector) {
    registerElements(components, injector);
  }
}
