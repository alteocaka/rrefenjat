import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Models/user';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {


    private user = new BehaviorSubject(null);
    public user$ = this.user.asObservable();

    private api = environment.api;

    constructor(private http: HttpClient) {}

    get currentUser() {
        return this.user.value;
    }

    get isLoggedIn(): boolean {
        return !!this.user.value;
    }

  // Users:

  signUp(): Observable<User>{
    return this.http.post<User>(`${this.api}auth/signup`,
    {
      username: 'fiorelo111111',
      email: 'usertest3@test.com',
      profilePhotoUrl: 'www.sdfsdfsdff.com',
      password: 'Fiorelo123456789'
    }

    );
  }
  signIn(): Observable<User>{
    const payload = {
        username: 'fiorelo111111',
        password: 'Fiorelo123456789'
    };
    return this.http.post<User>(`${this.api}auth/signin`, payload).pipe(
        tap(data => this.user.next(data))
    );
  }

  signUpAdmin(): Observable<User>{
    return this.http.post<User>(`${this.api}auth/signupasadmin`,
    {
      username: 'admin',
      email: 'adminadmin@test.com',
      password: 'Adminadmin1234',
      profilePhotoUrl: 'www.caosdfasdc.com',
    });
  }
  getProfile(): Observable<User>{
    return this.http.get<User>(`${this.api}auth/myprofile`);
  }

  resetPassword(){
    this.http.post(`${this.api}auth/resetpassword`,
    {
      currentPassword: 'Fiorelo123456789',
      password: 'Test12345'
    });
  }

}

