import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Organizationtab2PageRoutingModule } from './organizationtab2-routing.module';

import { Organizationtab2Page } from './organizationtab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Organizationtab2PageRoutingModule
  ],
  declarations: [Organizationtab2Page]
})
export class Organizationtab2PageModule {}
