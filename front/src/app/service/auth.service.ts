import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserCredentials} from "../models/Auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  logIn(user: UserCredentials): Observable<any> {
    return this.http.post(
      'https://bailanysta-production.up.railway.app/api-user-login/', {
        username: user.username,
        password: user.password
      }
    );
  }

  register(user: any): Observable<any> {
    return this.http.post<any>('https://bailanysta-production.up.railway.app/sign-up/', user);
  }
}
