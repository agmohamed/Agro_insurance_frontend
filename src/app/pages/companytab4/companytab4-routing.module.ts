import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Companytab4Page } from './companytab4.page';

const routes: Routes = [
  {
    path: '',
    component: Companytab4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Companytab4PageRoutingModule {}
