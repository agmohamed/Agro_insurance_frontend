import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsuranceCompnayPage } from './insurance-compnay.page';

const routes: Routes = [
  {
    path: '',
    component: InsuranceCompnayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceCompnayPageRoutingModule {}
