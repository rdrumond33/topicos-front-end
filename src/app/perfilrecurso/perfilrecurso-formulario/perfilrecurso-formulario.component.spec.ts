import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilrecursoFormularioComponent } from './perfilrecurso-formulario.component';

describe('PerfilrecursoFormularioComponent', () => {
  let component: PerfilrecursoFormularioComponent;
  let fixture: ComponentFixture<PerfilrecursoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilrecursoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilrecursoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
