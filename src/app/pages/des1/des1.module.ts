import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Des1PageRoutingModule } from './des1-routing.module';

import { Des1Page } from './des1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Des1PageRoutingModule
  ],
  declarations: [Des1Page]
})
export class Des1PageModule {}
