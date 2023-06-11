import { Component } from '@angular/core';
import { QuizzesService } from '../Service/Quiz/quizzes.service';
import { IQuiz } from '../Service/Models/Quiz';
import { ICourse } from '../Service/Models/Course';
import { CoursesService } from '../Service/Course/courses.service';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent {
  constructor(private qiz:QuizzesService,private crs:CoursesService) { }
  quiz?:IQuiz[];
  course?:ICourse[];
  qrs:boolean =false;
  // update:any=new UpdateCourseComponent(this.crs).updateCourse();
  ngOnInit(): void
  {
    this.crs.getCourse().subscribe(data=>this.course=data);
    this.qiz.getQuiz().subscribe(course => this.quiz =course);
  }
}
