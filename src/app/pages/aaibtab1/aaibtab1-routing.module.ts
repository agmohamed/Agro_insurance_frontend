import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aaibtab1Page } from './aaibtab1.page';

const routes: Routes = [
  {
    path: '',
    component: Aaibtab1Page,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aaibtab1PageRoutingModule {}
