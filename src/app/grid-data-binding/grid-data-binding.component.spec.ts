import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDataBindingComponent } from './grid-data-binding.component';

describe('GridDataBindingComponent', () => {
  let component: GridDataBindingComponent;
  let fixture: ComponentFixture<GridDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
