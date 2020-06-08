import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoagrupoListarComponent } from './pessoagrupo-listar.component';

describe('PessoagrupoListarComponent', () => {
  let component: PessoagrupoListarComponent;
  let fixture: ComponentFixture<PessoagrupoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoagrupoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoagrupoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
