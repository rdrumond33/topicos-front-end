import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoagrupoFormularioComponent } from './pessoagrupo-formulario.component';

describe('PessoagrupoFormularioComponent', () => {
  let component: PessoagrupoFormularioComponent;
  let fixture: ComponentFixture<PessoagrupoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoagrupoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoagrupoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
