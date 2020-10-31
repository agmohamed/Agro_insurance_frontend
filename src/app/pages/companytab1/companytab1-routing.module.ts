import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Companytab1Page } from './companytab1.page';

const routes: Routes = [
  {
    path: '',
    component: Companytab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Companytab1PageRoutingModule {}
