import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ElementRef,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "text",
  template: ``,
  styles: [``]
})
export class TextComponent implements OnInit {
  @Input() props: any;
  @HostBinding("attr.id") _id: string;
  @HostBinding("innerHTML") _html: string;

  constructor(public ele: ElementRef, public cd: ChangeDetectorRef) {}

  ngOnInit() {
    this._id = this.props.id;
    this._html = this.props.text;
    console.log(this);
  }

  update() {
    this._html = this.props.text;
  }
}
