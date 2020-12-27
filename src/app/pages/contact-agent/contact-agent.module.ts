import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactAgentPageRoutingModule } from './contact-agent-routing.module';

import { ContactAgentPage } from './contact-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactAgentPageRoutingModule
  ],
  declarations: [ContactAgentPage]
})
export class ContactAgentPageModule {}
