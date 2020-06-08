import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoLitarComponent } from './grupo-litar.component';

describe('GrupoLitarComponent', () => {
  let component: GrupoLitarComponent;
  let fixture: ComponentFixture<GrupoLitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoLitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoLitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
