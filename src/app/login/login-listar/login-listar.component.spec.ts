import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginListarComponent } from './login-listar.component';

describe('LoginListarComponent', () => {
  let component: LoginListarComponent;
  let fixture: ComponentFixture<LoginListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
