import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGastos } from './lista-gastos';

describe('ListaGastos', () => {
  let component: ListaGastos;
  let fixture: ComponentFixture<ListaGastos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaGastos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaGastos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
