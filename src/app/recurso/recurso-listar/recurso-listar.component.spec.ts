import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoListarComponent } from './recurso-listar.component';

describe('RecursoListarComponent', () => {
  let component: RecursoListarComponent;
  let fixture: ComponentFixture<RecursoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
