import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { CourseQuizdetailComponent } from './course-quizdetail/course-quizdetail.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdateQuizComponent } from './update-quiz/update-quiz.component';
import { TokenInterceptorService } from './Service/Authentication/token-interceptor.service';
import { CoursesService } from './Service/Course/courses.service';
import { QuizzesService } from './Service/Quiz/quizzes.service';
import { AuthService } from './Service/Authentication/auth.service';
import { UserService } from './Service/Register/user.service';
import { UserNavbarComponent } from './UserSide/user-navbar/user-navbar.component';
import { UserHomeComponent } from './UserSide/user-home/user-home.component';
import { UserCourseComponent } from './UserSide/user-course/user-course.component';
import { UserQuizComponent } from './UserSide/user-quiz/user-quiz.component';
import { UserCartComponent } from './UserSide/user-cart/user-cart.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FooterComponent } from './footer/footer.component';
import { AvailableQuizzesComponent } from './UserSide/available-quizzes/available-quizzes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CourseDetailsComponent,
    QuizDetailsComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    DeleteCourseComponent,
    CourseQuizdetailComponent,
    AddQuizComponent,
    RegisterComponent,
    LoginComponent,
    UpdateQuizComponent,
    UserNavbarComponent,
    UserHomeComponent,
    UserCourseComponent,
    UserQuizComponent,
    UserCartComponent,
    AdminLoginComponent,
    FooterComponent,
    AvailableQuizzesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CoursesService,QuizzesService,AuthService,UserService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
