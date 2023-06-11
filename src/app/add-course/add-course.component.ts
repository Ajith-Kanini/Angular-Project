import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Service/Course/courses.service';
import { ICourse } from '../Service/Models/Course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent  {
  constructor(private crs:CoursesService,private router: Router) { }
 course:ICourse={
  courseName: "",
  courseDuration: "",
  courseFees: 0,
  courseRating:0,
  quizzes:[]
 }
cour?:ICourse[];

  addCourse()
  {
    if(this.course.courseName == ""||this.course.courseDuration ==null||this.course.courseFees == null||this.course.courseRating==null)
    {
      alert("Please fill all fields!!!!");
    }
    this.crs.createCourse(this.course).subscribe(course => console.log(course));
    this.router.navigate(['/Courses'], { skipLocationChange: true }).then(() => {
      window.location.reload();
    });
    alert("New course added successfully!!! ")
  }
}
