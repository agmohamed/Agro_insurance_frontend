import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Companytab4PageRoutingModule } from './companytab4-routing.module';

import { Companytab4Page } from './companytab4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Companytab4PageRoutingModule
  ],
  declarations: [Companytab4Page]
})
export class Companytab4PageModule {}
