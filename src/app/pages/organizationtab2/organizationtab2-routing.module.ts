import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Organizationtab2Page } from './organizationtab2.page';

const routes: Routes = [
  {
    path: '',
    component: Organizationtab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Organizationtab2PageRoutingModule {}
