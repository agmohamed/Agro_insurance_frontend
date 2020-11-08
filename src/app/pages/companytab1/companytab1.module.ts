import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Companytab1PageRoutingModule } from './companytab1-routing.module';

import { Companytab1Page } from './companytab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Companytab1PageRoutingModule
  ],
  declarations: [Companytab1Page]
})
export class Companytab1PageModule {}
