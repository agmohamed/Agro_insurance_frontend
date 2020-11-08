import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Companytab2PageRoutingModule } from './companytab2-routing.module';

import { Companytab2Page } from './companytab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Companytab2PageRoutingModule
  ],
  declarations: [Companytab2Page]
})
export class Companytab2PageModule {}
