import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodEmpComponent } from './good-emp.component';

describe('GoodEmpComponent', () => {
  let component: GoodEmpComponent;
  let fixture: ComponentFixture<GoodEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
