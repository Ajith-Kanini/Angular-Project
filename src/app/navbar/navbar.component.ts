import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router){}
  logOut = () => {
    localStorage.removeItem("jwtToken");
  }
  // onCheck()
  // {

  //   if(!localStorage.getItem("jwtToken"))
  //   {
  //     alert("Please Signin or Signup!!!")
  //     this.router.navigate(['/Register']);
  //   }
  // }
}
