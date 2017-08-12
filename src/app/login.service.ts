import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor(private http : Http) { }

  getLoginDetails(){
    return this.http.get('/get')
    .map(res=>res.json);
  }
}
