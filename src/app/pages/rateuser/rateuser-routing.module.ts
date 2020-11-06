import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateuserPage } from './rateuser.page';

const routes: Routes = [
  {
    path: '',
    component: RateuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateuserPageRoutingModule {}
