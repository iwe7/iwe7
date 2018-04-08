import {
  Component,
  OnInit,
  Injector,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';
import { ValidatorsHelper } from '../validator';
import { fromEvent, merge } from 'rxjs';
@Component({
  selector: 'field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.scss']
})
export class FieldInputComponent implements OnInit, OnChanges {
  label: string = 'label';
  name: string = 'name';
  value: string = '';
  placeholder: string = 'placeholder';
  validators: any = {};
  id: any;

  @Input() props: any;

  form: FormGroup;
  control: AbstractControl;

  @ViewChild('input') input: ElementRef;
  showTip: boolean = false;
  constructor(
    public injector: Injector,
    public fb: FormBuilder,
    public validatorsHelper: ValidatorsHelper,
    public ele: ElementRef
  ) {
    this.id = new Date().getTime();
    // 创建动态表单
    this.form = new FormGroup(
      {},
      {
        updateOn: 'blur'
      }
    );
  }

  onBlur() {
    this.showTip = true;
    setTimeout(() => {
      this.hideTip();
    }, 1000);
  }

  hideTip() {
    this.showTip = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('props' in changes) {
      this.updateValue();
    }
  }

  // 更新配置项目
  updateValue() {
    const { label, name, value, placeholder, validators } = this.props;
    this.label = label || this.label;
    this.name = name || this.name;
    this.value = value || this.value;
    this.placeholder = placeholder || this.placeholder;
    this.validators = validators || this.validators;
    this.createForm();
  }

  createForm() {
    this.control = new FormControl(this.value, {
      validators: [],
      updateOn: 'blur'
    });
    this.control.clearValidators();
    const validators = [];
    Object.keys(this.validators).map(key => {
      const value = this.validators[key];
      const validator = this.validatorsHelper.getValidator(key);
      if (key === 'required') {
        validators.push(validator(value));
      } else {
        validators.push(validator(value));
      }
    });
    this.control.setValidators(validators);
    this.form.addControl(this.name, this.control);
    // 监听变化
    this.form.valueChanges.subscribe(res => {
      console.log(this.form.get(this.name).touched);
    });
  }

  ngOnInit() {}
}
