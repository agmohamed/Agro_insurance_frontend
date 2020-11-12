import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewlocationPageRoutingModule } from './viewlocation-routing.module';

import { ViewlocationPage } from './viewlocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewlocationPageRoutingModule
  ],
  declarations: [ViewlocationPage]
})
export class ViewlocationPageModule {}
