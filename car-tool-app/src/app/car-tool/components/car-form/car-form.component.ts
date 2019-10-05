import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ICar } from '../../models/ICar';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input()
  headerText = 'Car Form';

  @Input()
  buttonText = 'Submit Car';

  @Output()
  submitCar = new EventEmitter<ICar>();

  carForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.carForm = this.fb.group({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
  }

  doSubmitCar() {

    this.submitCar.emit({
      ...this.carForm.value,
    });

    this.carForm.reset();

    this.carForm.setValue({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });

  }

}
