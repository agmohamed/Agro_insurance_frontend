import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aaibtab2PageRoutingModule } from './aaibtab2-routing.module';

import { Aaibtab2Page } from './aaibtab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aaibtab2PageRoutingModule
  ],
  declarations: [Aaibtab2Page]
})
export class Aaibtab2PageModule {}
