import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyhistoryPage } from './companyhistory.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyhistoryPageRoutingModule {}
