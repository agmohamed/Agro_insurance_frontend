import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPolicyTypePage } from './add-policy-type.page';

const routes: Routes = [
  {
    path: '',
    component: AddPolicyTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPolicyTypePageRoutingModule {}
