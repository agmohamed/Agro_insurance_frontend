import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Companytab3Page } from './companytab3.page';

const routes: Routes = [
  {
    path: '',
    component: Companytab3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Companytab3PageRoutingModule {}
