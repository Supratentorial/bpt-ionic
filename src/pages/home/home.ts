import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BulletPageProvider } from "../../providers/bullet-page/bullet-page.provider";
import { BulletPage } from "../../models/bulletPage";
import { BulletPageDetailPage } from "../bullet-page-detail/bullet-page-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  bulletPages: Array<BulletPage> = []

  ngOnInit(): void {
    this.bulletPageService.getBulletPages().subscribe((bulletPages: Array<BulletPage>) => {
      this.bulletPages = bulletPages;
    })
  }

  constructor(public navCtrl: NavController, private bulletPageService: BulletPageProvider) {

  }

  itemTapped($event, bulletPage: BulletPage) {
      this.navCtrl.push(BulletPageDetailPage, {bulletPageId: bulletPage.id});
  }


}
