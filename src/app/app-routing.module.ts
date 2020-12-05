import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'insurance-compnay',
    loadChildren: () => import('./pages/insurance-compnay/insurance-compnay.module').then( m => m.InsuranceCompnayPageModule)
  },
  {
    path: 'aaib',
    loadChildren: () => import('./pages/aaib/aaib.module').then( m => m.AaibPageModule)
  },
  
  {
    path: 'tab4',
    loadChildren: () => import('./pages/tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./pages/description/description.module').then( m => m.DescriptionPageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./pages/forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: 'des1',
    loadChildren: () => import('./pages/des1/des1.module').then( m => m.Des1PageModule)
  },
  {
    path: 'des2',
    loadChildren: () => import('./pages/des2/des2.module').then( m => m.Des2PageModule)
  },
  {
    path: 'des3',
    loadChildren: () => import('./pages/des3/des3.module').then( m => m.Des3PageModule)
  },
  {
    path: 'claim',
    loadChildren: () => import('./pages/claim/claim.module').then( m => m.ClaimPageModule)
  },
  {
    path: 'policies',
    loadChildren: () => import('./pages/policies/policies.module').then( m => m.PoliciesPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./pages/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'types',
    loadChildren: () => import('./pages/types/types.module').then( m => m.TypesPageModule)
  },
  // {
  //   path: 'agent',
  //   loadChildren: () => import('./pages/agent/agent.module').then( m => m.AgentPageModule)
  // },
  {
    path: 'organization',
    loadChildren: () => import('./pages/organization/organization.module').then( m => m.OrganizationPageModule)
  },
  {
    path: 'active-policy',
    loadChildren: () => import('./pages/active-policy/active-policy.module').then( m => m.ActivePolicyPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./pages/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'agent-verification',
    loadChildren: () => import('./pages/agent-verification/agent-verification.module').then( m => m.AgentVerificationPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./pages/company/company.module').then( m => m.CompanyPageModule)
  },
  {
    path: 'companypolicyverification',
    loadChildren: () => import('./pages/companypolicyverification/companypolicyverification.module').then( m => m.CompanypolicyverificationPageModule)
  },
  {
    path: 'rateuser',
    loadChildren: () => import('./pages/rateuser/rateuser.module').then( m => m.RateuserPageModule)
  },
  {
    path: 'discussion',
    loadChildren: () => import('./pages/discussion/discussion.module').then( m => m.DiscussionPageModule)
  },
  {
    path: 'viewlocation',
    loadChildren: () => import('./pages/viewlocation/viewlocation.module').then( m => m.ViewlocationPageModule)
  },
  {
    path: 'add-policy-type',
    loadChildren: () => import('./pages/add-policy-type/add-policy-type.module').then( m => m.AddPolicyTypePageModule)
  },
  {
    path: 'organization-verification',
    loadChildren: () => import('./pages/organization-verification/organization-verification.module').then( m => m.OrganizationVerificationPageModule)
  },
  
  {
    path: 'companyclaimverification',
    loadChildren: () => import('./pages/companyclaimverification/companyclaimverification.module').then( m => m.CompanyclaimverificationPageModule)
  },
  {
    path: 'agent-home',
    loadChildren: () => import('./pages/agent-home/agent-home.module').then( m => m.AgentHomePageModule)
  },
  {
    path: 'apply-policy',
    loadChildren: () => import('./pages/apply-policy/apply-policy.module').then( m => m.ApplyPolicyPageModule)
  },
  

  // {
  //   path: 'agenttab1',
  //   loadChildren: () => import('./pages/agenttab1/agenttab1.module').then( m => m.Agenttab1PageModule)
  // },
  // {
  //   path: 'agenttab2',
  //   loadChildren: () => import('./pages/agenttab2/agenttab2.module').then( m => m.Agenttab2PageModule)
  // },




  // {
  //   path: 'companytab1',
  //   loadChildren: () => import('./pages/companytab1/companytab1.module').then( m => m.Companytab1PageModule)
  // },
  // {
  //   path: 'companytab2',
  //   loadChildren: () => import('./pages/companytab2/companytab2.module').then( m => m.Companytab2PageModule)
  // },
  // {
  //   path: 'companytab3',
  //   loadChildren: () => import('./pages/companytab3/companytab3.module').then( m => m.Companytab3PageModule)
  // },
  // {
  //   path: 'companytab4',
  //   loadChildren: () => import('./pages/companytab4/companytab4.module').then( m => m.Companytab4PageModule)
  // },

  
  // {
  //   path: 'aaibtab1',
  //   loadChildren: () => import('./pages/aaibtab1/aaibtab1.module').then( m => m.Aaibtab1PageModule)
  // },
  // {
  //   path: 'aaibtab2',
  //   loadChildren: () => import('./pages/aaibtab2/aaibtab2.module').then( m => m.Aaibtab2PageModule)
  // },
  // {
  //   path: 'aaibtab3',
  //   loadChildren: () => import('./pages/aaibtab3/aaibtab3.module').then( m => m.Aaibtab3PageModule)
  // },
  // {
  //   path: 'aaibtab4',
  //   loadChildren: () => import('./pages/aaibtab4/aaibtab4.module').then( m => m.Aaibtab4PageModule)
  // },

  // {
  //   path: 'tab1',
  //   loadChildren: () => import('./pages/tab1/tab1.module').then( m => m.Tab1PageModule)
  // },
  // {
  //   path: 'tab2',
  //   loadChildren: () => import('./pages/tab2/tab2.module').then( m => m.Tab2PageModule)
  // },
  // {
  //   path: 'tab3',
  //   loadChildren: () => import('./pages/tab3/tab3.module').then( m => m.Tab3PageModule)
  // },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  // },
  
];

  

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
