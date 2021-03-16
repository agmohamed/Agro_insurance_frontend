import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPolicyPage } from './add-policy.page';

const routes: Routes = [
  {
    path: '',
    component: AddPolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPolicyPageRoutingModule {}
