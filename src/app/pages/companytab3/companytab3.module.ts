import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Companytab3PageRoutingModule } from './companytab3-routing.module';

import { Companytab3Page } from './companytab3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Companytab3PageRoutingModule
  ],
  declarations: [Companytab3Page]
})
export class Companytab3PageModule {}
