import { TestBed } from '@angular/core/testing';

import { ListarClientesService } from './listar-clientes.service';

describe('ListarClientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarClientesService = TestBed.get(ListarClientesService);
    expect(service).toBeTruthy();
  });
});
