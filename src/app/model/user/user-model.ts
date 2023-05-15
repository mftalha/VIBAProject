import { Injectable } from "@angular/core";

@Injectable()
export class UserModel {
    public userNameSurname: string = null as any;
    public userDescription: string = null as any;
    public userPhone: string = null as any;
    public userEmail: string = null as any;
    public isActive: boolean = null as any;
    public connectionType: number = null as any;
    public ftpUrl: string = null as any;
    public userId: string = null as  any;
    public userPassword: string = null as any;
    public userPasswordAgain: string = null as any; 
}
