import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyclaimverificationPageRoutingModule } from './companyclaimverification-routing.module';

import { CompanyclaimverificationPage } from './companyclaimverification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyclaimverificationPageRoutingModule
  ],
  declarations: [CompanyclaimverificationPage]
})
export class CompanyclaimverificationPageModule {}
