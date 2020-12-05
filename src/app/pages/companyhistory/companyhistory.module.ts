import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyhistoryPageRoutingModule } from './companyhistory-routing.module';

import { CompanyhistoryPage } from './companyhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyhistoryPageRoutingModule
  ],
  declarations: [CompanyhistoryPage]
})
export class CompanyhistoryPageModule {}
