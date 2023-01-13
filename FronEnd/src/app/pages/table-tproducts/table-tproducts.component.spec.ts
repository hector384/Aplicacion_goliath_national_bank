import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTproductsComponent } from './table-tproducts.component';

describe('TableTproductsComponent', () => {
  let component: TableTproductsComponent;
  let fixture: ComponentFixture<TableTproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
