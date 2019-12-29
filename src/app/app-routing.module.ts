import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './pages/home/home.component'
import { ResourceGroupsComponent } from './pages/resourceGroups/resourceGroups.component'
import { HeaderComponent } from './component/header/header.component';
import { ListAccountsComponent } from './pages/listAccounts/listAccounts.component';
import { ShowAccountComponent } from './pages/showAccount/showAccount.component';
const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'groups', component: ResourceGroupsComponent},
  { path: 'listAcc', component: ListAccountsComponent},
  { path: 'showAcc', component: ShowAccountComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
