import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizzesService } from '../Service/Quiz/quizzes.service';
import { IQuiz } from '../Service/Models/Quiz';
import { CoursesService } from '../Service/Course/courses.service';
import { ICourse } from '../Service/Models/Course';

@Component({
  selector: 'app-course-quizdetail',
  templateUrl: './course-quizdetail.component.html',
  styleUrls: ['./course-quizdetail.component.css']
})
export class CourseQuizdetailComponent implements OnInit {
  constructor(private route: ActivatedRoute,private qiz:QuizzesService,private crs:CoursesService) { }
  id:any;
  quiz?:IQuiz[];
  qzz?:ICourse;
  selectedCourseId?: number;
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.crs.getCourseByID(this.id).subscribe(data=>this.qzz=data);
    this.qiz.getCourseQuiz(this.id).subscribe(quiz =>this.quiz=quiz);
  }
  passCourseId(quizId:any) {
    this.selectedCourseId = quizId;
  }
  deleteQuiz(id:any, name:any,diff:any) {
    this.qiz.deleteQuiz(id).subscribe(
      () => {
        if(confirm("Quiz " + name + " with difficulty level "+diff+" deleted Successfully!!!"))
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
