import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChildDecorator,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'design-div',
  templateUrl: './design-div.component.html',
  styleUrls: ['./design-div.component.scss']
})
export class DesignDivComponent implements OnInit {
  @Input() input1: string;
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor(public view: ViewContainerRef) {}

  ngOnInit() {
    console.log(this);
    let i = 0;
    setInterval(() => {
      i++;
      this.change.emit('change ' + i);
    }, 1000);
  }
}
