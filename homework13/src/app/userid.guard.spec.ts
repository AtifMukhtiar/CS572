import { TestBed, async, inject } from '@angular/core/testing';

import { UseridGuard } from './userid.guard';

describe('UseridGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UseridGuard]
    });
  });

  it('should ...', inject([UseridGuard], (guard: UseridGuard) => {
    expect(guard).toBeTruthy();
  }));
});
