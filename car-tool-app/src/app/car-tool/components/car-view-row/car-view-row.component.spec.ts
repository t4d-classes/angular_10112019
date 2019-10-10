import { Pipe, PipeTransform } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ICar } from '../../models/ICar';

import { CarViewRowComponent } from './car-view-row.component';

@Pipe({
  name: 'currency',
})
class FakeCurrencyPipe implements PipeTransform {

  transform(value: any) {
    return value;
  }

}

describe('CarViewRowComponent', () => {
  let component: CarViewRowComponent;
  let fixture: ComponentFixture<CarViewRowComponent>;

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
      declarations: [
        FakeCurrencyPipe, // using a fake pipe to avoid the formatting to ease testing
        CarViewRowComponent,
      ]
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

  it('should populate table row with car', () => {

    const fields = [ 'id', 'make', 'model', 'year', 'color', 'price' ];

    const tdElements = fixture.debugElement
      .queryAll(By.css('td'))
      .map(de => de.nativeElement)
      .slice(0, fields.length);

    tdElements.forEach( (nel, index) => {
      expect(nel.innerText)
        .toEqual(String(car[fields[index]]));
    });

  });

  it('should emit car id when edit button clicked', () => {

    const spy = jasmine.createSpy('editCar');

    component.editCar.subscribe(carId => {
      expect(carId).toEqual(car.id);
      spy(carId);
    });

    const button = fixture.debugElement
      .query(By.css('button:nth-child(1)'))
      .nativeElement;

    button.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledWith(car.id);
  });

  it('should emit car id when delete button clicked', () => {

    const spy = jasmine.createSpy('deleteCar');

    component.deleteCar.subscribe(carId => {
      expect(carId).toEqual(car.id);
      spy(carId);
    });

    const button = fixture.debugElement
      .query(By.css('button:nth-child(2)'))
      .nativeElement;

    button.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledWith(car.id);
  });


});
