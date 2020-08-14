import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aaibtab3Page } from './aaibtab3.page';

const routes: Routes = [
  {
    path: '',
    component: Aaibtab3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aaibtab3PageRoutingModule {}
