import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPolicyTypePageRoutingModule } from './add-policy-type-routing.module';

import { AddPolicyTypePage } from './add-policy-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPolicyTypePageRoutingModule
  ],
  declarations: [AddPolicyTypePage]
})
export class AddPolicyTypePageModule {}
