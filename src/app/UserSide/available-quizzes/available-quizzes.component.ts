import { Component } from '@angular/core';
import { CoursesService } from 'src/app/Service/Course/courses.service';
import { ICourse } from 'src/app/Service/Models/Course';

@Component({
  selector: 'app-available-quizzes',
  templateUrl: './available-quizzes.component.html',
  styleUrls: ['./available-quizzes.component.css']
})
export class AvailableQuizzesComponent {

  constructor(private crs:CoursesService) {
    this.filteredCourses = this.course;
  }
  course:ICourse[]=[];
  filteredCourses: ICourse[];
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

  filterCourses(event: any) {
    const searchText = event.target.value.toLowerCase(); // Convert the search text to lowercase for case-insensitive comparison

    // Filter the courses based on the search text
    this.filteredCourses = this.course.filter((course) =>
      course.courseName.toLowerCase().includes(searchText)
    );
  }
}
