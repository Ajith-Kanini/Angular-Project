import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Service/Course/courses.service';
import { ICourse } from 'src/app/Service/Models/Course';
import { IQuiz } from 'src/app/Service/Models/Quiz';
import { QuizzesService } from 'src/app/Service/Quiz/quizzes.service';

@Component({
  selector: 'app-user-quiz',
  templateUrl: './user-quiz.component.html',
  styleUrls: ['./user-quiz.component.css']
})
export class UserQuizComponent {
  constructor(private route: ActivatedRoute,private qiz:QuizzesService,private crs:CoursesService) { }
  id:any;
  qzz?:ICourse;
  selectedCourseId?: number;
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.crs.getCourseByID(this.id).subscribe(data=>this.qzz=data);
}
}
