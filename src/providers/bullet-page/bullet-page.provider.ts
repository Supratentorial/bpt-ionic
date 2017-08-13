import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BulletProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BulletPageProvider {

  private bulletPagesEndpoint : string = 'http://localhost:5000/api/bulletpages';

  constructor(public http: Http) {
    console.log('Hello BulletProvider Provider');
  }

  getBulletPages(){
    return this.http.get(this.bulletPagesEndpoint).map(this.extractData);
  }

  extractData(response:Response){
    return response.json();
  }

  getBullets(bulletPageId){
    return this.http.get(this.bulletPagesEndpoint + '/' + bulletPageId + '/bullets').map(this.extractData);
  }

}
