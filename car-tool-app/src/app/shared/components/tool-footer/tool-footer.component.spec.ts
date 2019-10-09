import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolFooterComponent } from './tool-footer.component';

describe('ToolFooterComponent', () => {

  let component: ToolFooterComponent;
  let fixture: ComponentFixture<ToolFooterComponent>;
  const organizationName = 'Test Company';
  const privacyPolicyUrl = 'http://policy';
  const termsOfUseUrl = 'http://terms-of-use';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(ToolFooterComponent);
  
    component = fixture.componentInstance;

    // inputs/outputs should be public for unit testing
    component.organizationName = organizationName;
    component.privacyPolicyUrl = privacyPolicyUrl;
    component.termsOfUseUrl = termsOfUseUrl;
  
    fixture.detectChanges();
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('company name pass through', () => {

    const spanElement = fixture.nativeElement.querySelector('span') as HTMLSpanElement;

    const expectedSpanContent = `${new Date().getFullYear()} ${organizationName}`;

    expect(spanElement.textContent).toBe(expectedSpanContent);

  });
});
