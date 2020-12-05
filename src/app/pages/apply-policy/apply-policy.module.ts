import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyPolicyPageRoutingModule } from './apply-policy-routing.module';

import { ApplyPolicyPage } from './apply-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyPolicyPageRoutingModule
  ],
  declarations: [ApplyPolicyPage]
})
export class ApplyPolicyPageModule {}
