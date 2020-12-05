import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Organizationtab1PageRoutingModule } from './organizationtab1-routing.module';

import { Organizationtab1Page } from './organizationtab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Organizationtab1PageRoutingModule
  ],
  declarations: [Organizationtab1Page]
})
export class Organizationtab1PageModule {}
