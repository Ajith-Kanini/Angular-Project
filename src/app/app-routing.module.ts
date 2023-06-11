import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CourseQuizdetailComponent } from './course-quizdetail/course-quizdetail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './UserSide/user-home/user-home.component';
import { UserCourseComponent } from './UserSide/user-course/user-course.component';
import { UserQuizComponent } from './UserSide/user-quiz/user-quiz.component';
import { UserCartComponent } from './UserSide/user-cart/user-cart.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AvailableQuizzesComponent } from './UserSide/available-quizzes/available-quizzes.component';
import { AuthGuard } from './Service/Guard/auth.guard';

const routes: Routes = [
  {path:'' , component:RegisterComponent},
  {path:"Home" , component:HomeComponent, canActivate: [AuthGuard] },
  {path:"Courses" , component:CourseDetailsComponent, canActivate: [AuthGuard] },
  {path:"Quizzes/:id" , component:CourseQuizdetailComponent, canActivate: [AuthGuard] },
  {path:"Quizzes" , component:QuizDetailsComponent, canActivate: [AuthGuard] },
  {path:"Courses/:id" , component:UpdateCourseComponent, canActivate: [AuthGuard] },
  {path:"Register" , component:RegisterComponent},
  {path:"Login" , component:LoginComponent},

  {path:"uHome" , component:UserHomeComponent, canActivate: [AuthGuard] },
  {path:"uCourses" , component:UserCourseComponent, canActivate: [AuthGuard] },
  {path:"uQuizzes/:id" , component:UserQuizComponent, canActivate: [AuthGuard] },
  {path:"uCart" , component:UserCartComponent, canActivate: [AuthGuard] },
  {path:"Adminlogin" , component:AdminLoginComponent},
  {path:"uAllQuizzes" , component:AvailableQuizzesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
