import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotacaoService } from './anotacao.service';
import { AnotacaoFormularioComponent } from './anotacao-formulario/anotacao-formulario.component';

describe('AnotacaoService', () => {
  let service: AnotacaoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotacaoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
