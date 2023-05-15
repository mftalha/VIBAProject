import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    UserAddComponent,
    UserListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component: HomeComponent},
      {path:"home", component: HomeComponent},
      {path:"userAdd", component: UserAddComponent}
    ])
  ]
})
export class UiModule { }