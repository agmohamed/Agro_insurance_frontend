import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPolicyPageRoutingModule } from './add-policy-routing.module';

import { AddPolicyPage } from './add-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPolicyPageRoutingModule
  ],
  declarations: [AddPolicyPage]
})
export class AddPolicyPageModule {}
