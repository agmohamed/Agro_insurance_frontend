import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aaibtab4PageRoutingModule } from './aaibtab4-routing.module';

import { Aaibtab4Page } from './aaibtab4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aaibtab4PageRoutingModule
  ],
  declarations: [Aaibtab4Page]
})
export class Aaibtab4PageModule {}
