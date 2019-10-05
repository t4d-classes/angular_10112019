import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ICar } from '../../models/ICar';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars: ICar[] = [];
  editCarId = -1;

  constructor(private carsSvc: CarsService) { }

  ngOnInit() {
    this.doRefreshCars();
  }

  doRefreshCars(obs: Observable<any> = null) {
    const carsObs = obs
      ? obs.pipe(switchMap(() => this.carsSvc.all()))
      : this.carsSvc.all();

    carsObs.subscribe(cars => {
      this.cars = cars;
      this.editCarId = -1;
    });
  }

  doAppendCar(car: ICar) {
    this.doRefreshCars(this.carsSvc.append(car));
  }

  doReplaceCar(car: ICar) {
    this.doRefreshCars(this.carsSvc.replace(car));
  }

  doDeleteCar(carId: number) {
    this.doRefreshCars(this.carsSvc.delete(carId));
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }
}
