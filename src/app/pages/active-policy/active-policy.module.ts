import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivePolicyPageRoutingModule } from './active-policy-routing.module';

import { ActivePolicyPage } from './active-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivePolicyPageRoutingModule
  ],
  declarations: [ActivePolicyPage]
})
export class ActivePolicyPageModule {}
