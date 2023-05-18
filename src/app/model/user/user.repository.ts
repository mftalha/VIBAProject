import { Injectable } from "@angular/core";
import { UserModel } from "./user-model";
import { Observable } from "rxjs";
import { RestService } from "../rest.service";

@Injectable()
export class UserRepository{

    constructor(private restService: RestService){};
    
    addUser(user: UserModel) : Observable<UserModel> {
        return this.restService.addUser(user);
    }
}