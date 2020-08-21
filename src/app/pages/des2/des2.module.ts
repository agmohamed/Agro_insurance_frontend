import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Des2PageRoutingModule } from './des2-routing.module';

import { Des2Page } from './des2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Des2PageRoutingModule
  ],
  declarations: [Des2Page]
})
export class Des2PageModule {}
