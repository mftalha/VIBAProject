import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/model/user/user-model';
import { UserRepository } from 'src/app/model/user/user.repository';

declare let alertify: any;

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  constructor(public userModel: UserModel, private userRepository: UserRepository){}
  passwordRepeat: string = "--";

  userAdd(form: NgForm){
    
      if(this.userModel.connectionType != 1)
        this.userModel.ftpUrl = "-";

      if(form.valid){
        if(this.passwordRepeat == this.userModel.userPassword){
          this.userRepository.addUser(this.userModel)
          .subscribe(user => {
            this.userModel.clearUserModel();
            alertify.success('Ekleme işlemi başarılı bir şekilde gerçekleştirildi.')
          })
        }
        else
          alertify.error('Şifreler uyuşmamaktadır!');
      }
      else
        alertify.warning('Lütfen gerekli alanları doldururnuz!')
  }

  testMethod(){
     const tst = document.getElementById('userIsActive');
     //if(tst)
     // tst.checked;
  }

  // connection select'i için
  connectionType = [
    {name: 'Ftp Service' , value:1},
    {name: 'Service' , value:2}
  ]

  //selecte başlangıç olarak selected atanamıyor : o yüzden bu şekilde 1 value değerini başlanıgç değeri olarak atıyoruz.
  ngOnInit(){ //ngOnInit  ngOnInit
    this.userModel.connectionType=1;
  }
}
