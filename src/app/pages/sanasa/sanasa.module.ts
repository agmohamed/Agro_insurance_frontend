import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanasaPageRoutingModule } from './sanasa-routing.module';

import { SanasaPage } from './sanasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanasaPageRoutingModule
  ],
  declarations: [SanasaPage]
})
export class SanasaPageModule {}
