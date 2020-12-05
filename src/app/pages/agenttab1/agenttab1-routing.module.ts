import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Agenttab1Page } from './agenttab1.page';

const routes: Routes = [
  {
    path: '',
    component: Agenttab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Agenttab1PageRoutingModule {}
