import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CarViewRowComponent } from '../car-view-row/car-view-row.component';
import { CarEditRowComponent } from '../car-edit-row/car-edit-row.component';

import { CarTableComponent } from './car-table.component';

describe('CarTableComponent', () => {
  let component: CarTableComponent;
  let fixture: ComponentFixture<CarTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [
        CarTableComponent,
        CarViewRowComponent,
        CarEditRowComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
