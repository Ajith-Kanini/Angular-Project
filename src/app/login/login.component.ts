import { Component } from '@angular/core';
import { AuthService } from '../Service/Authentication/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService,private router: Router){}
  user = {
    mailId: '',
    password: ''
  };

  onCheck()
  {

    if(!localStorage.getItem("jwtToken"))
    {
      this.router.navigate(['/Login']);
    }
  }
  onSubmit(): void {
    // Handle the form submission logic here
    console.log(this.user);
    // You can send the user data to an API or perform any other actions
  }
  onSignIn(mailId: string, password: string) {
    this.authService.signIn(mailId, password)
      .subscribe(
        (response) => {
          // Handle successful sign-in, such as redirecting to another page
          if(confirm("Logged in successfully"))
          {
            this.router.navigate(['/uHome']);
          }
        },
        (error) => {
          alert("Please enter correct username or password!!!!");
        }
      );
  }

}
