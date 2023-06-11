import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from '../Service/Models/Course';
import { CoursesService } from '../Service/Course/courses.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  constructor(private crs:CoursesService) { }
  @Input() data?: any;
  ngOnInit(): void {
    this.crs.getCourseByID(this.data).subscribe((data) => {
      this.cros = data;
      this.course.courseId = this.cros?.courseId;
      this.crsName= this.cros?.courseName;
    });
  }
  crsName!:string;
  cros?:ICourse;
 course:ICourse={
  courseId:this.data,
  courseName: this.crsName,
  courseDuration: "",
  courseFees: 0,
  courseRating:0
 }
  updateCourse()
  {
    console.log(this.crsName);
    console.log(this.data);
    console.log(this.course);
    this.crs.updateCourse(this.data,this.course).subscribe(course => console.log(course));
    if(confirm("Course updated successfully!!! "))
    {
      window.location.reload();
    }
  }



}
