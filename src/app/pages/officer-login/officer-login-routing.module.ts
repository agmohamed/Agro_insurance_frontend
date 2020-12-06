import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficerLoginPage } from './officer-login.page';

const routes: Routes = [
  {
    path: '',
    component: OfficerLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficerLoginPageRoutingModule {}
