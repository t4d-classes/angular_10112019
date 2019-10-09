import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ICar } from '../models/ICar';
import { CarsService } from './cars.service';

describe('CarsService', () => {

  let carsSvc: CarsService;
  let http: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ CarsService ],
  }));

  beforeEach(() => {
    http = TestBed.get(HttpTestingController);
    carsSvc = TestBed.get(CarsService);
  });

  it('should be created', () => {
    const service: CarsService = TestBed.get(CarsService);
    expect(service).toBeTruthy();
  });

  it('should get all cars', () => {

    const expectedCars = [
      { id: 1, make: 'test', model: 'test', year: 2017, color: 'green', price: 10000 },
      { id: 2, make: 'test', model: 'test', year: 2018, color: 'green', price: 20000 },
    ];

    carsSvc.all().subscribe(cars => {
      expect(cars).toEqual(expectedCars);
    });

    const req = http.expectOne('http://localhost:3010/cars');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedCars);

  });

  it('should get one car', () => {

    const expectedCar = { id: 1, make: 'test', model: 'test', year: 2017, color: 'green', price: 10000 };

    carsSvc.one(1).subscribe(cars => {
      expect(cars).toEqual(expectedCar);
    });

    const req = http.expectOne('http://localhost:3010/cars/1');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedCar);

  });


  it('should append a car', () => {

    const carToAppend: ICar = { make: 'test', model: 'test2', year: 1900, color: 'upick', price: 1 };
    const carAppended: ICar = { id: 1, ...carToAppend };

    carsSvc.append(carToAppend).subscribe(car => expect(car).toEqual(carAppended));

    const req = http.expectOne('http://localhost:3010/cars');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(carToAppend);
    req.flush(carAppended);
  });

  afterEach(() => {
    http.verify();
  });

});
