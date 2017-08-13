import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bullet } from "../../models/bullet";
import { BulletPageProvider } from "../../providers/bullet-page/bullet-page.provider";

@IonicPage()
@Component({
  selector: 'page-bullet-page-detail',
  templateUrl: 'bullet-page-detail.html',
})
export class BulletPageDetailPage implements OnInit {
  bullets: Array<Bullet>;

  ngOnInit(): void {
    let bulletPageId = this.navParams.get('bulletPageId');
    this.bulletProvider.getBullets(bulletPageId).subscribe((bullets) => {
      this.bullets = bullets;
    });
  }



  constructor(public navCtrl: NavController, public navParams: NavParams, private bulletProvider: BulletPageProvider) {

  }

  ionViewDidLoad() {

  }

}
