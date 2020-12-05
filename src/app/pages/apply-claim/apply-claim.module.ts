import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyClaimPageRoutingModule } from './apply-claim-routing.module';

import { ApplyClaimPage } from './apply-claim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyClaimPageRoutingModule
  ],
  declarations: [ApplyClaimPage]
})
export class ApplyClaimPageModule {}
