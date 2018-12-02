import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBmiComponent } from './create-bmi.component';

describe('CreateBmiComponent', () => {
  let component: CreateBmiComponent;
  let fixture: ComponentFixture<CreateBmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
