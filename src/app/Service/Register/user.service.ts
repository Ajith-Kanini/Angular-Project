import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = "https://localhost:7074/api/UserRegistrations"
  constructor(private http:HttpClient) { }

  createUser(user:IUser):Observable<IUser>
  {
    return this.http.post<IUser>(this.url,user);
  }
  getTotalUser():Observable<number>
  {
    return this.http.get<number>(`https://localhost:7074/api/UserRegistrations/Users/Totalcount`);
  }
}
