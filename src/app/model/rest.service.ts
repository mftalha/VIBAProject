import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './user/user-model';
import { Observable } from 'rxjs';

/*
@Injectable({
  providedIn: 'root'
})
*/

@Injectable()
export class RestService {
 //private http: HttpClient
  constructor(private http: HttpClient) { }

  baseUrl: string= "http://localhost:3501";

  addUser(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>(`${this.baseUrl}/user`, user);
  }
}
