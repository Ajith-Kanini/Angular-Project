import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IQuiz } from '../Models/Quiz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(private http:HttpClient) { }
  url:string = "https://localhost:7074/api/Quiz";

  getQuiz():Observable<IQuiz[]>
  {
    return this.http.get<IQuiz[]>(this.url);
  }
  getQuizByID(id:number):Observable<IQuiz>
  {
    return this.http.get<IQuiz>(`${this.url}/${id}`);
  }
  createQuiz(item:IQuiz):Observable<IQuiz>
  {
    return this.http.post<IQuiz>(this.url,item);
  }
  updateQuz(qzid:number,item:IQuiz):Observable<IQuiz>
  {
    return this.http.put<IQuiz>(this.url+"/"+qzid,item);
  }

  deleteQuiz(id:number):Observable<IQuiz>
  {
    return this.http.delete<IQuiz>(this.url+"/"+id);
  }

  getTotalQuiz():Observable<number>
  {
    return this.http.get<number>(`https://localhost:7074/api/Quiz/Quizzes/Totalcount`);
  }


  getCourseQuiz(id:number):Observable<IQuiz[]>
  {
    return this.http.get<IQuiz[]>(`https://localhost:7074/api/Quiz/Quizzes/course/${id}`);
  }

  getQuizzByCourseName(courseName: string): Observable<IQuiz[]>
  {
    return this.http.get<IQuiz[]>(`https://localhost:7074/api/Quiz/Quizzes/course?s=${courseName}`)
  }
}
