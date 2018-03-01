import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../model/item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  public login(): Observable<Item[]> {
    return this.httpClient.post<Item[]>('/proxy/login', { username: 'admin', password: 'default' });
  }

  public logout(): Observable<Item[]> {
    return this.httpClient.post<Item[]>('/proxy/logout', null);
  }
}
