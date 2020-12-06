import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficerLoginPageRoutingModule } from './officer-login-routing.module';

import { OfficerLoginPage } from './officer-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficerLoginPageRoutingModule
  ],
  declarations: [OfficerLoginPage]
})
export class OfficerLoginPageModule {}
