import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModel } from './user/user-model';
import {HttpClientModule} from '@angular/common/http'
import { RestService } from './rest.service';
import { UserRepository } from './user/user.repository';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[UserModel,RestService,UserRepository]
})
export class ModelModule { }
