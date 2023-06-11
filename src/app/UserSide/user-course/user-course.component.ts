import { Component } from '@angular/core';
import { CoursesService } from 'src/app/Service/Course/courses.service';
import { ICourse } from 'src/app/Service/Models/Course';

@Component({
  selector: 'app-user-course',
  templateUrl: './user-course.component.html',
  styleUrls: ['./user-course.component.css']
})
export class UserCourseComponent {
  constructor(private crs:CoursesService) {
    this.filteredCourses = this.course;
  }
  course:ICourse[]=[];
  filteredCourses?: ICourse[];
  course1?:ICourse;
  search!:string ;
  selectedCourseId?: number;
  condition:boolean=false;
  // update:any=new UpdateCourseComponent(this.crs).updateCourse();
  ngOnInit(): void
  {

    this.crs.getCourse().subscribe(co=>this.course=co);
  }
  passCourseId(courseId:any) {
    this.selectedCourseId = courseId;
  }

  filterCourses() {
    this.condition=true;
    if (this.search) {
      // Filter the courses based on the search query
      this.filteredCourses = this.course.filter((c: ICourse) => c.courseName.toLowerCase().includes(this.search.toLowerCase()));
    } else {
      // If the search query is empty, show all courses
      this.filteredCourses = this.course;
    }
  }
}
