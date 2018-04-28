import { Injectable } from "@angular/core";
import { user } from "../Model/user";
import { Http, Response, Headers, URLSearchParams, RequestOptions } from "@angular/http";
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class loginService{
constructor(private _http:Http){}

getUsers(): Observable<user[]>{
    return this._http.get("http://localhost:3000/products")
    .map(this.extractData)
		        .catch(this.handleError);
    // .map((response: Response) => <ILogin[]>response.json());
}

login(email: string, password: string): Observable<any> {
    let url = 'http://localhost:3000/users/logintoken';
    let body = JSON.stringify({email,password});
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
    return this._http.post(url, '{"email":"abhay.ciem@gmail.com","password":"abhay"}', options)
    .map(this.extractData)
    .catch(this.handleError);

  }

private extractData(res: Response) {
    let body = res.json();
    return body;
}
private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
}
}
