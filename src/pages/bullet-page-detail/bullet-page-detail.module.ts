import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BulletPageDetailPage } from './bullet-page-detail';

@NgModule({
  declarations: [
    BulletPageDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BulletPageDetailPage),
  ],
})
export class BulletPageDetailPageModule {}
