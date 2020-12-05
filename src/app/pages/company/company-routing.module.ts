import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyPage } from './company.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyPage,

     children:[
      {
       
        path: 'companytab1',
        children:[
          {
            path:'',
            loadChildren: () => import('../companytab1/companytab1.module').then( m => m.Companytab1PageModule)
          },
          
        ]
      },
      {
        path: 'companytab2',
        children:[
          {
            path:'',
            loadChildren: () => import('../companytab2/companytab2.module').then( m => m.Companytab2PageModule)
          },
          
        ]
      },
      {
        path: 'companytab3',
        children:[
          {
            path:'',
            loadChildren: () => import('../companytab3/companytab3.module').then( m => m.Companytab3PageModule)
          },
          
        ]
      },
      {
        path: 'companytab4',
        children:[
          {
            path:'',
            loadChildren: () => import('../companytab4/companytab4.module').then( m => m.Companytab4PageModule)
          },
          
        ]
      },
      {
        path: 'companyhistory',
        children:[
          {
            path:'',
            loadChildren: () => import('../companyhistory/companyhistory.module').then( m => m.CompanyhistoryPageModule)
          },
          
        ]
      },
     
      {
        path:'',
        redirectTo:'/company/companytab1',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyPageRoutingModule {}
