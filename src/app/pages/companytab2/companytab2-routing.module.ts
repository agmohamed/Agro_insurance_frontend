import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Companytab2Page } from './companytab2.page';

const routes: Routes = [
  {
    path: '',
    component: Companytab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Companytab2PageRoutingModule {}
