import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyclaimverificationPage } from './companyclaimverification.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyclaimverificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyclaimverificationPageRoutingModule {}
