import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorregistrationComponent } from './donorregistration.component';

describe('DonorregistrationComponent', () => {
  let component: DonorregistrationComponent;
  let fixture: ComponentFixture<DonorregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
