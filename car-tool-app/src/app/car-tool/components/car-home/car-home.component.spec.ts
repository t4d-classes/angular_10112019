import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ToolHeaderComponent } from '../../../shared/components/tool-header/tool-header.component';
import { ToolFooterComponent } from '../../../shared/components/tool-footer/tool-footer.component';

import { CarTableComponent } from '../car-table/car-table.component';
import { CarViewRowComponent } from '../car-view-row/car-view-row.component';
import { CarEditRowComponent } from '../car-edit-row/car-edit-row.component';
import { CarFormComponent } from '../car-form/car-form.component';

import { CarHomeComponent } from './car-home.component';

describe('CarHomeComponent', () => {
  let component: CarHomeComponent;
  let fixture: ComponentFixture<CarHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, HttpClientTestingModule, ],
      declarations: [
        CarHomeComponent, ToolHeaderComponent, ToolFooterComponent,
        CarTableComponent, CarFormComponent, CarViewRowComponent,
        CarEditRowComponent,
      ],
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
});
