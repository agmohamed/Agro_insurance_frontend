import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Organizationtab1Page } from './organizationtab1.page';

const routes: Routes = [
  {
    path: '',
    component: Organizationtab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Organizationtab1PageRoutingModule {}
