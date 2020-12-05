import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Agenttab1PageRoutingModule } from './agenttab1-routing.module';

import { Agenttab1Page } from './agenttab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   
    Agenttab1PageRoutingModule
  ],
  declarations: [Agenttab1Page]
})
export class Agenttab1PageModule {}
