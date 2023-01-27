import { TestBed } from '@angular/core/testing';

import { ExerciseAppService } from './exercise-app.service';

describe('ExerciseAppService', () => {
  let service: ExerciseAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
