import { OnInit, Component, Input } from '@angular/core';
import { Table } from '../../interface';
import { TableBuilderLoki } from '../../table-builder';
import { MeepoRender } from 'iwe7/render';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'table-preview',
  templateUrl: './table-preview.html',
  styleUrls: ['./table-preview.scss']
})
export class TablePreview implements OnInit {
  name: string;
  formObj: any[] = [];
  form: FormGroup;

  @Input() change$: Subject<any> = new Subject();
  @Input() update$: Subject<any> = new Subject();
  constructor(
    public builder: TableBuilderLoki,
    public router: Router,
    public fb: FormBuilder,
    public route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(res => {
      let { name } = res;
      this.name = name || '';
    });
    this.form = this.fb.group({});
  }

  ngOnInit() {
    this.initForm();
    this.update$.subscribe(res => {
      this.initForm();
    });
  }

  initForm() {
    let table = this.builder.getData(item => {
      return item.name === this.name;
    });
    this.formObj = table['preview'] || [];
    this.formObj.map(res => {
      if (res.name.length > 0) {
        if (!this.form.contains(res.name)) {
          this.form.addControl(res.name, this.fb.control(res.value));
        } else {
          this.form.setControl(res.name, this.fb.control(res.value));
        }
      }
    });
  }
}
