import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Service/Course/courses.service';
import { QuizzesService } from 'src/app/Service/Quiz/quizzes.service';
import { UserService } from 'src/app/Service/Register/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

constructor(private crs:CoursesService, private qzz:QuizzesService,private usr:UserService){}
courseCount?:number;
quizCount?:number;
userCount?:number;
  ngOnInit(): void {
    this.crs.getTotalcourse().subscribe(total=>this.courseCount = total)
    this.qzz.getTotalQuiz().subscribe(total=>this.quizCount = total)
    this.usr.getTotalUser().subscribe(total=>this.userCount = total)
  }


}
