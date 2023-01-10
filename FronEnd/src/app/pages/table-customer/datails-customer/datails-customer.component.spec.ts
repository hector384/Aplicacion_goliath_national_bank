import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailsCustomerComponent } from './datails-customer.component';

describe('DatailsCustomerComponent', () => {
  let component: DatailsCustomerComponent;
  let fixture: ComponentFixture<DatailsCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailsCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatailsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
