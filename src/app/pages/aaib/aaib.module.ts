import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AaibPageRoutingModule } from './aaib-routing.module';

import { AaibPage } from './aaib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AaibPageRoutingModule
  ],
  declarations: [AaibPage]
})
export class AaibPageModule {}
