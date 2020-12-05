import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentHomePage } from './agent-home.page';


const routes: Routes = [
  {
    path: '',
    component: AgentHomePage,
    children:[
      {
        path: 'agent',
        children:[
          {
            path:'',
            loadChildren:()=>import('../agent/agent.module').then( m => m.AgentPageModule)
          },
          
        ]
      },
      {
        path: 'agenttab1',
        children:[
          {
            path:'',
            loadChildren:()=>import('../agenttab1/agenttab1.module').then( m => m.Agenttab1PageModule)
          },
          
        ]
      },
      {
        path: 'agenttab2',
        children:[
          {
            path:'',
            loadChildren:()=>import('../agenttab2/agenttab2.module').then( m => m.Agenttab2PageModule)
          },
          
        ]
      },
      
      {
        path:'',
        redirectTo:'/agent-home/agent',
        pathMatch:'full'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentHomePageRoutingModule {}
