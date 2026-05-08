import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGasto } from './formulario-gasto';

describe('FormularioGasto', () => {
  let component: FormularioGasto;
  let fixture: ComponentFixture<FormularioGasto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioGasto],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioGasto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
