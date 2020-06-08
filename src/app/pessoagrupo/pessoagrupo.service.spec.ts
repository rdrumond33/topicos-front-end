import { TestBed } from '@angular/core/testing';

import { PessoagrupoService } from './pessoagrupo.service';

describe('PessoagrupoService', () => {
  let service: PessoagrupoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoagrupoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
