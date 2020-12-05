import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Agenttab2PageRoutingModule } from './agenttab2-routing.module';

import { Agenttab2Page } from './agenttab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Agenttab2PageRoutingModule
  ],
  declarations: [Agenttab2Page]
})
export class Agenttab2PageModule {}
