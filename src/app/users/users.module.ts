import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersAddEditComponent } from './users-add-edit/users-add-edit.component';
import { UsersViewComponent } from './users-view/users-view.component';



@NgModule({
  declarations: [
    UsersAddEditComponent,
    UsersViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
