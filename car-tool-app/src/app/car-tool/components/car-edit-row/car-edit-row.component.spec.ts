import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ICar } from '../../models/ICar';

import { CarEditRowComponent } from './car-edit-row.component';

describe('CarEditRowComponent', () => {
  let component: CarEditRowComponent;
  let fixture: ComponentFixture<CarEditRowComponent>;

  const car: ICar = {
    make: 'car make',
    model: 'car model',
    year: 1999,
    color: 'blue',
    price: 1000,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarEditRowComponent ],
      imports: [ ReactiveFormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarEditRowComponent);

    component = fixture.componentInstance;
    component.car = car;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
