import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from '../Models/Course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }
  url:string = "https://localhost:7074/api/Course";

  getCourse():Observable<ICourse[]>
  {
    return this.http.get<ICourse[]>(this.url);
  }
  getCourseByID(id:number):Observable<ICourse>
  {
    return this.http.get<ICourse>(`https://localhost:7074/api/Course/${id}`);
  }

  createCourse(item:ICourse):Observable<ICourse>
  {
    return this.http.post<ICourse>(this.url,item);
  }
  updateCourse(id:number,item:ICourse):Observable<ICourse>
  {
    return this.http.put<ICourse>(this.url+"/"+id,item);
  }

  deleteCourse(id:number):Observable<ICourse>
  {
    return this.http.delete<ICourse>(this.url+"/"+id);
  }

  getTotalcourse():Observable<number>
  {
    return this.http.get<number>(`https://localhost:7074/api/Course/Courses/Totalcount`);
  }

  Searchcourse(name:string):Observable<ICourse>
  {
    return this.http.get<ICourse>(`https://localhost:7074/api/Course/Courses/Search?name=${name}`);
  }
}
