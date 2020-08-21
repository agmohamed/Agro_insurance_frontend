import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Des2Page } from './des2.page';

const routes: Routes = [
  {
    path: '',
    component: Des2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Des2PageRoutingModule {}
