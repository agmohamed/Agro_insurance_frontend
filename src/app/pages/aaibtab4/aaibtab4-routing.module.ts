import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aaibtab4Page } from './aaibtab4.page';

const routes: Routes = [
  {
    path: '',
    component: Aaibtab4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aaibtab4PageRoutingModule {}
