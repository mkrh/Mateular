import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class MatomatService {
    private url = 'http://localhost:5000/';

    constructor(private http: HttpClient) { }

    public post(uri: string, payload: any) {
        const completeUri = encodeURI(this.url + uri);
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', 'admin');
        urlSearchParams.append('password', 'default');
        this.http.post(completeUri, urlSearchParams).subscribe(
            data => {
              alert('ok');
            },
            error => {
              console.log(JSON.stringify(error.json()));
            }
          );
    }
}
