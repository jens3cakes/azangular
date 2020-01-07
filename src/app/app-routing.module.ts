import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './pages/home/home.component'
import { AllResourceGroupsComponent } from './pages/AllResourceGroups/AllResourceGroups.component'
import { HeaderComponent } from './component/header/header.component';
import { ListAccountsComponent } from './pages/listAccounts/listAccounts.component';
import { ShowAccountComponent } from './pages/showAccount/showAccount.component';
import { SqlServerComponent } from './pages/SqlServer/sqlServer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'all_groups', component: AllResourceGroupsComponent },
  { path: 'listAcc', component: ListAccountsComponent },
  { path: 'showAcc', component: ShowAccountComponent },
  { path: 'sqlServer/:id', component: SqlServerComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
