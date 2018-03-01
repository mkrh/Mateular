import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../model/item';
import { Login } from '../../model/login';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  public login(login: Login): Observable<any> {
    return this.httpClient.post<any>('/proxy/login', login);
  }

  public logout(login: Login): Observable<any> {
    return this.httpClient.post<any>('/proxy/logout', null);
  }
}
