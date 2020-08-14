import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AaibPage } from './aaib.page';

const routes: Routes = [
  {
    path: '',
    component: AaibPage,
     children:[
      {
        path: 'aaibtab1',
        children:[
          {
            path:'',
            loadChildren:()=>import('../aaibtab1/aaibtab1.module').then( m => m.Aaibtab1PageModule)
          },
          
        ]
      },
      {
        path: 'aaibtab2',
        children:[
          {
            path:'',
            loadChildren:()=>import('../aaibtab2/aaibtab2.module').then( m => m.Aaibtab2PageModule)
          },
          
        ]
      },
      {
        path: 'aaibtab3',
        children:[
          {
            path:'',
            loadChildren:()=>import('../aaibtab3/aaibtab3.module').then( m => m.Aaibtab3PageModule)
          },
          
        ]
      },
      {
        path: 'aaibtab4',
        children:[
          {
            path:'',
            loadChildren:()=>import('../aaibtab4/aaibtab4.module').then( m => m.Aaibtab4PageModule)
          },
          
        ]
      },
      {
        path:'',
        redirectTo:'/aaib/aaibtab1',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AaibPageRoutingModule {}
