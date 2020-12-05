import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationHomePage } from './organization-home.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizationHomePage,
    children:[
      {
        path: 'organization',
        children:[
          {
            path:'',
            loadChildren: () => import('../organization/organization.module').then( m => m.OrganizationPageModule)
          },
          
        ]
      },
      {
        path: 'organizationtab1',
        children:[
          {
            path:'',
            loadChildren: () => import('../organizationtab1/organizationtab1.module').then( m => m.Organizationtab1PageModule)
          },
          
        ]
      },
      {
        path: 'organizationtab2',
        children:[
          {
            path:'',
            loadChildren: () => import('../organizationtab2/organizationtab2.module').then( m => m.Organizationtab2PageModule)
          },
          
        ]
      },
      
      {
        path:'',
        redirectTo:'/organization-home/organization',
        pathMatch:'full'
      }
    ]
  }

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationHomePageRoutingModule {}
