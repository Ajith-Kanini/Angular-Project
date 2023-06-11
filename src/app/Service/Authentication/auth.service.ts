import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  signIn(mailId: string, password: string) {
    const signInData = { mailId, password };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'  // Treat the response as plain text
    };

    return this.http.post<string>('https://localhost:7074/api/Token', signInData, httpOptions)
      .pipe(
        tap(jwtToken => {
          localStorage.setItem('jwtToken', jwtToken);
        })
      );
  }
  // private fetchTokenFromServer(): Observable<string> {
  //   // Example asynchronous token retrieval using HttpClient
  //   return this.http.get<string>('https://localhost:7074/api/Token');
  // }

  getToken()
  {
    return localStorage.getItem('jwtToken');
  }

}

