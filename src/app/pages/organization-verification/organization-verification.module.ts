import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizationVerificationPageRoutingModule } from './organization-verification-routing.module';

import { OrganizationVerificationPage } from './organization-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizationVerificationPageRoutingModule
  ],
  declarations: [OrganizationVerificationPage]
})
export class OrganizationVerificationPageModule {}
