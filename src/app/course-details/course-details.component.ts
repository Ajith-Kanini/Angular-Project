import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Service/Course/courses.service';
import { UpdateCourseComponent } from '../update-course/update-course.component';
import { ICourse } from '../Service/Models/Course';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  constructor(private crs:CoursesService) { }
  course?:ICourse[];
  course1?:ICourse;
  qrs:boolean =false;
  selectedCourseId?: number;

  // update:any=new UpdateCourseComponent(this.crs).updateCourse();
  ngOnInit(): void
  {
    this.crs.getCourse().subscribe(co=>this.course=co);
  }
  passCourseId(courseId:any) {
    this.selectedCourseId = courseId;
  }
  deleteCourse(id:any, name: string) {
    this.crs.deleteCourse(id).subscribe(
      () => {
        confirm("Course " + name + " deleted Successfully!!!")
        {
          window.location.reload();
        }
      },
      error => {
        console.error(error);
        alert("An error occurred while deleting the course. Please try again.");
      }
    );
  }

}
