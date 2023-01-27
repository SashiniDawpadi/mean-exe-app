import { Component, OnInit } from '@angular/core';
import { ExerciseAppService } from 'src/app/services/exercise-app.service';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-exercise-list-view',
  templateUrl: './exercise-list-view.component.html',
  styleUrls: ['./exercise-list-view.component.css'],
})
export class ExerciseListViewComponent implements OnInit {
  listExercises: any;

  constructor(private exerciseService: ExerciseAppService) {}
  displayedColumns = ['username', 'description', 'duration', 'date'];
  ngOnInit(): void {
    this.exerciseService.listExercises().subscribe((data) => {
      console.log(data);
      this.listExercises = data;
    });
  }
}
