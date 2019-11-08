import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class PeoplesService {

  constructor(private http: HttpClient) {}

  // fetchPeople(): Observable <Object> {
  //   return this.http.get( '/assets/abc.json' );
  // }
    fetchPeople(): Observable <Object> {
    return this.http.get( '/assets/abc.json');
  }
}
