import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { ICar } from '../../models/ICar';

import { CarEditRowComponent } from './car-edit-row.component';

describe('CarEditRowComponent', () => {
  let component: CarEditRowComponent;
  let fixture: ComponentFixture<CarEditRowComponent>;

  const car: ICar = {
    id: 1,
    make: 'Ford',
    model: 'Focus',
    year: 1998,
    color: 'magenta',
    price: 2000,
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

  it('should output the modified car', () => {

    const input = fixture.debugElement
      .query(By.css('input'))
      .nativeElement;

    input.value = 'Chevrolet';
    input.dispatchEvent(new Event('input'));

    expect(component.editCarForm.value.make).toEqual('Chevrolet');

  });

  it('should emit car when save button clicked', () => {

    const spy = jasmine.createSpy('saveCar');

    component.saveCar.subscribe(spy);

    const button = fixture.debugElement
      .query(By.css('button:nth-child(1)'))
      .nativeElement;

    button.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledWith(car);
  });

  it('should emit nothing when cancel button clicked', () => {

    const spy = jasmine.createSpy('cancelCar');

    component.cancelCar.subscribe(spy);

    const button = fixture.debugElement
      .query(By.css('button:nth-child(2)'))
      .nativeElement;

    button.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledWith(undefined);
  });
});
