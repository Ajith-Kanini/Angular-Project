import { Component } from '@angular/core';
import { AuthService } from '../Service/Authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private authService: AuthService,private router: Router){}
  user = {
    mailId: '',
    password: ''
  };

  // login(mailId: string, password: string) {
  //   this.authService.signIn(mailId, password)
  //     .subscribe(
  //       (response) => {
  //         // Handle successful sign-in, such as redirecting to another page
  //         if(confirm("Logged in successfully"))
  //         {
  //           this.router.navigate(['/Home']);
  //         }
  //       },
  //       (error) => {
  //         alert("Please enter correct username or password!!!!");
  //       }
  //     );
 // }

 login(mailId: string, password: string) {

        if(mailId ==="admin@gmail.com" && password ==='Admin@123')
        {
          if(confirm("Successfully logged in"))
          {
            this.router.navigate(['/Courses']);
          }
        }
        else{
          alert("Please Valid credentials!!")
        }
 }
}
