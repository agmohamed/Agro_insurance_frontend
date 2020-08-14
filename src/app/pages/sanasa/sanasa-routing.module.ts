import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanasaPage } from './sanasa.page';

const routes: Routes = [
  {
    path: '',
    component: SanasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanasaPageRoutingModule {}
