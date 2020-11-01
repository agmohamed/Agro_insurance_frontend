import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanypolicyverificationPageRoutingModule } from './companypolicyverification-routing.module';

import { CompanypolicyverificationPage } from './companypolicyverification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanypolicyverificationPageRoutingModule
  ],
  declarations: [CompanypolicyverificationPage]
})
export class CompanypolicyverificationPageModule {}
