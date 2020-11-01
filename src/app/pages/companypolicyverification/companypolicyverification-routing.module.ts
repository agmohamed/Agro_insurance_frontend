import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanypolicyverificationPage } from './companypolicyverification.page';

const routes: Routes = [
  {
    path: '',
    component: CompanypolicyverificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanypolicyverificationPageRoutingModule {}
