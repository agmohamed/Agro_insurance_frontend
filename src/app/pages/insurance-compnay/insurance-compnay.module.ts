import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsuranceCompnayPageRoutingModule } from './insurance-compnay-routing.module';

import { InsuranceCompnayPage } from './insurance-compnay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsuranceCompnayPageRoutingModule
  ],
  declarations: [InsuranceCompnayPage]
})
export class InsuranceCompnayPageModule {}
