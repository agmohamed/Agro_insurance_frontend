import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Des3Page } from './des3.page';

const routes: Routes = [
  {
    path: '',
    component: Des3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Des3PageRoutingModule {}
