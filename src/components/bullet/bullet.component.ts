import { Http } from '@angular/http';
import { Bullet } from './../../models/bullet';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the BulletComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'bullet',
  templateUrl: 'bullet.component.html'
})
export class BulletComponent {

  @Input()
  bullet: Bullet;

  constructor(private http: Http) {

  }

  upVote() {
    this.bullet.upvotes++;
  }

  downVote() {
    this.bullet.downvotes--;
  }

  saveBullet() {
      
  }

}
