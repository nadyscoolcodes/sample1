import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginoneComponent } from './loginone.component';

describe('LoginoneComponent', () => {
  let component: LoginoneComponent;
  let fixture: ComponentFixture<LoginoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
