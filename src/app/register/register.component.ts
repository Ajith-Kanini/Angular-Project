import { Component } from '@angular/core';
import { IUser } from '../Service/Models/User';
import { UserService } from '../Service/Register/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private usr:UserService){}
  user:IUser = {
    userName: '',
    mailId: '',
    password: ''
  };

  onSubmit() {
    return this.usr.createUser(this.user).subscribe(user=>this.user = user),alert("Registered successfully");
  }
}
