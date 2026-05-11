import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGasto } from './detalle-gasto';

describe('DetalleGasto', () => {
  let component: DetalleGasto;
  let fixture: ComponentFixture<DetalleGasto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleGasto],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleGasto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
