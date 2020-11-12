import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewlocationPage } from './viewlocation.page';

const routes: Routes = [
  {
    path: '',
    component: ViewlocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewlocationPageRoutingModule {}
