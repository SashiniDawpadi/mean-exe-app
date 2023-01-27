import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseAppService } from 'src/app/services/exercise-app.service';

@Component({
  selector: 'app-exercise-view',
  templateUrl: './exercise-view.component.html',
  styleUrls: ['./exercise-view.component.css'],
})
export class ExerciseViewComponent implements OnInit {
  exerciseId: string = '';
  constructor(
    private exerciseService: ExerciseAppService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.exerciseId = params['id'];
      console.log(this.exerciseId);
    });
    this.exerciseService.getExerice(this.exerciseId).subscribe((data) => {
      console.log(data);
    });
  }
}
