import { Component } from '@angular/core';
import { IUser } from '../Service/Models/User';
import { UserService } from '../Service/Register/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private usr:UserService,private router:Router){}
  user:IUser = {
    userName: '',
    mailId: '',
    password: ''
  };

  onSubmit() {
    this.usr.createUser(this.user).subscribe(user=>this.user = user);
    if(confirm("Registered successfully!"))
    {
      this.router.navigate(['/Login']);
    }
  }
}
