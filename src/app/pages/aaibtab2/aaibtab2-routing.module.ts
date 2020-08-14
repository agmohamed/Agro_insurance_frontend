import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aaibtab2Page } from './aaibtab2.page';

const routes: Routes = [
  {
    path: '',
    component: Aaibtab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aaibtab2PageRoutingModule {}
