import { Component, Input } from '@angular/core';
import { CoursesService } from '../Service/Course/courses.service';
import { ICourse } from '../Service/Models/Course';
import { IQuiz } from '../Service/Models/Quiz';
import { QuizzesService } from '../Service/Quiz/quizzes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent {
  constructor(private qiz:QuizzesService,private crs:CoursesService,private route: ActivatedRoute) { }
  @Input() data?: any;
  id!:any ;
  qid?:number ;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.crs.getCourseByID(this.id).subscribe((data) => {
      this.course = data;
      this.quiz.courseId = this.course?.courseId;
      this.quiz.course = this.course;
    });
  }
  course?:ICourse;
  qzz?:IQuiz;
  quiz:IQuiz={
  quizId:this.qid,
  quizName: "",
  quizDifLevel: "",
  courseId: this.course?.courseId,
  course: this.course
}
  updateQuiz()
  {
    console.log(this.qid);
    this.qiz.updateQuz(this.data.qid, this.quiz).subscribe(data=>console.log(data))
    if(confirm("Quiz updated successfully!!! "))
    {
      // window.location.reload();
    }
  }


}
