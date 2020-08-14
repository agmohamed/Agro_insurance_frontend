import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aaibtab1PageRoutingModule } from './aaibtab1-routing.module';

import { Aaibtab1Page } from './aaibtab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aaibtab1PageRoutingModule
  ],
  declarations: [Aaibtab1Page]
})
export class Aaibtab1PageModule {}
