import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './pages/home/home.component'
import { AllResourceGroupsComponent } from './pages/AllResourceGroups/AllResourceGroups.component'
import { HeaderComponent } from './component/header/header.component';
import { ListAccountsComponent } from './pages/listAccounts/listAccounts.component';
import { ShowAccountComponent } from './pages/showAccount/showAccount.component';
import { SqlServerComponent } from './pages/SqlServer/sqlServer.component';
import { SqlDatabasesComponent } from './pages/SqlDatabases/sqlDatabases.component';
import { AllVmsComponent } from './pages/AllVms/allVms.component';
import { AllVnetComponent } from './pages/AllVnet/all_vnet.component';
import { WebAppsComponent } from './pages/home/WebApps/webApps.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'all_groups', component: AllResourceGroupsComponent },
  { path: 'listAcc', component: ListAccountsComponent },
  { path: 'showAcc', component: ShowAccountComponent },
  { path: 'sqlServer/:id', component: SqlServerComponent},
  { path: 'sqlDatabases/:group/:servename', component: SqlDatabasesComponent},
  { path: 'allVms', component: AllVmsComponent },
  { path: 'all_vnets', component: AllVnetComponent},
  { path: 'webApps', component: WebAppsComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
