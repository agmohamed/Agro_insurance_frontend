import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aaibtab3PageRoutingModule } from './aaibtab3-routing.module';

import { Aaibtab3Page } from './aaibtab3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aaibtab3PageRoutingModule
  ],
  declarations: [Aaibtab3Page]
})
export class Aaibtab3PageModule {}
