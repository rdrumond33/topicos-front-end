import { TestBed } from '@angular/core/testing';

import { PerfilrecursoService } from './perfilrecurso.service';

describe('PerfilrecursoService', () => {
  let service: PerfilrecursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilrecursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
