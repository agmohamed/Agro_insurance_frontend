import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentVerificationPage } from './agent-verification.page';

const routes: Routes = [
  {
    path: '',
    component: AgentVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentVerificationPageRoutingModule {}
