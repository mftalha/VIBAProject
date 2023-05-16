import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/model/user/user-model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {

  constructor(public userModel: UserModel){}

  userAdd(form: NgForm){
    
    console.log(this.userModel);
  }

}
