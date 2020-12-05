import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyPolicyPage } from './apply-policy.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyPolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyPolicyPageRoutingModule {}
