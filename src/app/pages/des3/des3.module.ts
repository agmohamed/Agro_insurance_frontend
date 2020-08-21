import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Des3PageRoutingModule } from './des3-routing.module';

import { Des3Page } from './des3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Des3PageRoutingModule
  ],
  declarations: [Des3Page]
})
export class Des3PageModule {}
