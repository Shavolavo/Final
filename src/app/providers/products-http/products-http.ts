
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
@Injectable()
export class ProductsHttp {

  constructor(public http: Http) {
  }

  query():Observable<Array<any>> {
    return this.http.get('http://localhost:3000/produtos')
    .map(response=> response.json());
  }

}
*/
// .map não está reconhecendo item do observable
