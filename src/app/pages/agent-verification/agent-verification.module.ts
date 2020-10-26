import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentVerificationPageRoutingModule } from './agent-verification-routing.module';

import { AgentVerificationPage } from './agent-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentVerificationPageRoutingModule
  ],
  declarations: [AgentVerificationPage]
})
export class AgentVerificationPageModule {}
