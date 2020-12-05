import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Agenttab2Page } from './agenttab2.page';

const routes: Routes = [
  {
    path: '',
    component: Agenttab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Agenttab2PageRoutingModule {}
