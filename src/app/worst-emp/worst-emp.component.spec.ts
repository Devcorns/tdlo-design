import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorstEmpComponent } from './worst-emp.component';

describe('WorstEmpComponent', () => {
  let component: WorstEmpComponent;
  let fixture: ComponentFixture<WorstEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorstEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorstEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
