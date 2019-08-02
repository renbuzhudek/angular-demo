/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MessgaesService } from './messgaes.service';

describe('Service: Messgaes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessgaesService]
    });
  });

  it('should ...', inject([MessgaesService], (service: MessgaesService) => {
    expect(service).toBeTruthy();
  }));
});
