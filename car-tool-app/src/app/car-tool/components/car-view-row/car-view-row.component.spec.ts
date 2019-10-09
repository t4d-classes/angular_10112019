import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICar } from '../../models/ICar';

import { CarViewRowComponent } from './car-view-row.component';

describe('CarViewRowComponent', () => {
  let component: CarViewRowComponent;
  let fixture: ComponentFixture<CarViewRowComponent>;

  const car: ICar = {
    make: 'car make',
    model: 'car model',
    year: 1999,
    color: 'blue',
    price: 1000,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarViewRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarViewRowComponent);
    component = fixture.componentInstance;
    component.car = car;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
