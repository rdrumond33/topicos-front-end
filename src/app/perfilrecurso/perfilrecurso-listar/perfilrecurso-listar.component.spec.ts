import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilrecursoListarComponent } from './perfilrecurso-listar.component';

describe('PerfilrecursoListarComponent', () => {
  let component: PerfilrecursoListarComponent;
  let fixture: ComponentFixture<PerfilrecursoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilrecursoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilrecursoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
