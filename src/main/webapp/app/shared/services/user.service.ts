import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { IUser } from '../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    sourceAPI = `${SERVER_API_URL}api/account`;
    constructor(private http: HttpClient) {}

    get(req?: any): Observable<HttpResponse<IUser[]>> {
        return this.http.get<IUser[]>(`${this.sourceAPI}/GetUserList`, { observe: 'response' });
    }

    save(user: IUser): Observable<HttpResponse<any>> {
        return this.http.post(`${this.sourceAPI}/SaveUser`, user, { observe: 'response' });
    }
}
