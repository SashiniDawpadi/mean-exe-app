import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseAddEditComponent } from './exercises/exercise-add-edit/exercise-add-edit.component';
import { ExerciseListViewComponent } from './exercises/exercise-list-view/exercise-list-view.component';
import { ExerciseViewComponent } from './exercises/exercise-view/exercise-view.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  {
    path: 'exercises',
    children: [
      { path: '', component: ExerciseListViewComponent },
      { path: 'add', component: ExerciseAddEditComponent },
      { path: 'edit', component: ExerciseAddEditComponent },
      { path: ':id', component: ExerciseViewComponent },
      { path: 'list', component: ExerciseListViewComponent },
    ],
  },
  {
    path: 'users',
    children: [{ path: '', component: UsersListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
