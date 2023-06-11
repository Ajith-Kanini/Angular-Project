import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../Service/Quiz/quizzes.service';
import { IQuiz } from '../Service/Models/Quiz';
import { ICourse } from '../Service/Models/Course';
import { CoursesService } from '../Service/Course/courses.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  constructor(private qiz:QuizzesService,private crs:CoursesService,private route: ActivatedRoute) { }
  id!:any ;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.crs.getCourseByID(this.id).subscribe((data) => {
      this.course = data;
      this.quiz.courseId = this.course?.courseId;
      this.quiz.course = this.course;
    });
  }

  course?:ICourse;
  quiz:IQuiz={
    quizName: "",
    quizDifLevel: "",
    courseId: this.course?.courseId,
    course: this.course
  }
  addCourse() {
    console.log(this.quiz);
    this.qiz.createQuiz(this.quiz).subscribe((course) => {
      console.log(course)

    });
    if(confirm('New quiz added successfully!!!'))
    {
      window.location.reload();
    }
  }
}
