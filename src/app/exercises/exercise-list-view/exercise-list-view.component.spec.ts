import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseListViewComponent } from './exercise-list-view.component';

describe('ExerciseListViewComponent', () => {
  let component: ExerciseListViewComponent;
  let fixture: ComponentFixture<ExerciseListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
