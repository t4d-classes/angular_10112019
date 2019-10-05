import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolFooterComponent } from './tool-footer.component';

describe('ToolFooterComponent', () => {
  let component: ToolFooterComponent;
  let fixture: ComponentFixture<ToolFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
