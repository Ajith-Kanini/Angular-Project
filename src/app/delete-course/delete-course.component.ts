import { Component } from '@angular/core';
import { CoursesService } from '../Service/Course/courses.service';
import { ICourse } from '../Service/Models/Course';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent {
constructor(private crs:CoursesService){}
id!:number;
course?:ICourse;
deleteCourse()
{
  return this.crs.deleteCourse(this.id).subscribe(data=>this.course=data),alert("Course "+this.course?.courseName+" deleted Successfully!!!");
}
}
