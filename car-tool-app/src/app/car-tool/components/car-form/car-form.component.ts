import {
  Component, OnInit, Input, Output, EventEmitter,
  ViewChild, ElementRef, AfterViewInit,
} from '@angular/core';
import {
  FormBuilder, FormGroup, Validators,
} from '@angular/forms';

import { ICar } from '../../models/ICar';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit, AfterViewInit {

  @ViewChild('makeInput', { static: true })
  makeInputElement: ElementRef;

  @Input()
  headerText = 'Car Form';

  @Input()
  buttonText = 'Submit Car';

  @Output()
  submitCar = new EventEmitter<ICar>();

  carForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  initialForm() {
    return {
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    };
  }

  resetCarForm() {
    this.carForm.reset();
    this.carForm.setValue(this.initialForm());
    this.makeInputElement.nativeElement.focus();
  }

  ngOnInit() {
    this.carForm = this.fb.group({
      make: [ '', { validators: [ Validators.required ] } ],
      model: [ '', { validators: [ Validators.required ] } ],
      year: [ 1900, { validators: [ Validators.required, Validators.min(1870), Validators.max(2020) ] } ],
      color: [ '', { validators: [ Validators.required ] } ],
      price: [ 0, { validators: [ Validators.required, Validators.min(0) ] } ],
    });
  }

  ngAfterViewInit() {
    this.makeInputElement.nativeElement.focus();
  }

  doSubmitCarForm() {
    this.submitCar.emit({
      ...this.carForm.value,
    });

    this.resetCarForm();
  }

  doResetCarForm() {
    this.resetCarForm();
  }

}
