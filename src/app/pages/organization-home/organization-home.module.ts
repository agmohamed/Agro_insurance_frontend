import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizationHomePageRoutingModule } from './organization-home-routing.module';

import { OrganizationHomePage } from './organization-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizationHomePageRoutingModule
  ],
  declarations: [OrganizationHomePage]
})
export class OrganizationHomePageModule {}
