import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Des1Page } from './des1.page';

const routes: Routes = [
  {
    path: '',
    component: Des1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Des1PageRoutingModule {}
