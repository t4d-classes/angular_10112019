import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { ICar } from '../../models/ICar';
import { CarsService } from '../../services/cars.service';
import { CarHomeComponent } from './car-home.component';

describe('CarHomeComponent', () => {
  let component: CarHomeComponent;
  let fixture: ComponentFixture<CarHomeComponent>;

  const cars: ICar[] = [
    { id: 1, make: 'test', model: 'test', year: 2017, color: 'green', price: 10000 },
    { id: 2, make: 'test', model: 'test', year: 2018, color: 'green', price: 20000 },
  ];

  const fakeCarsService = {
    _cars: cars,
    all() { return of(this._cars); },
    one() { return null; },
    append(car: ICar) { return of(this._cars = this._cars.concat({
      ...car, id: Math.max(...cars.map(c => c.id), 0) + 1,
    })); },
    replace: () => null,
    delete: () => null,
  };

  beforeEach(async(() => {

    spyOn(fakeCarsService, 'all').and.callThrough();
    spyOn(fakeCarsService, 'append').and.callThrough();

    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, HttpClientTestingModule, ],
      declarations: [
        CarHomeComponent,
      ],
      providers: [ { provide: CarsService, useValue: fakeCarsService } ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should refresh cars', () => {

    console.log(fakeCarsService._cars.length);

    component.doRefreshCars();
    expect(fakeCarsService.all).toHaveBeenCalled();
    expect(component.cars.length).toBe(2);
  });

  it('should append car', () => {

    console.log(fakeCarsService._cars.length);
    const car: ICar = { make: 'test', model: 'test', year: 2002, color: 'red', price: 100 };

    component.doAppendCar(car);

    expect(fakeCarsService.append).toHaveBeenCalledWith(car);
    expect(fakeCarsService.all).toHaveBeenCalled();
    expect(component.cars.length).toBe(3);
  });

  it('edit car', () => {
    component.doEditCar(2);
    expect(component.editCarId).toBe(2);
  });

  it('cancel car', () => {
    component.doCancelCar();
    expect(component.editCarId).toBe(-1);
  });

});
