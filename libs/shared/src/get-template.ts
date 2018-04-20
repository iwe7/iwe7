import {
  Directive,
  TemplateRef,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';

@Directive({ selector: '[getTemplate]' })
export class GetTemplateDirective implements OnInit {
  @Output() getTemplate: EventEmitter<any> = new EventEmitter();
  constructor(public tpl: TemplateRef<any>) {}

  ngOnInit() {
    this.getTemplate.emit(this.tpl);
  }
}
