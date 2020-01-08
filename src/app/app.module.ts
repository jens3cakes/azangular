import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AllResourceGroupsComponent } from './pages/AllResourceGroups/AllResourceGroups.component';
import { HeaderComponent } from './component/header/header.component';
import { ListAccountsComponent } from './pages/listAccounts/listAccounts.component';
import { ShowAccountComponent } from './pages/showAccount/showAccount.component';
import { SqlServerComponent } from './pages/SqlServer/sqlServer.component';
import { SqlDatabasesComponent } from './pages/SqlDatabases/sqlDatabases.component';
import { AllVmsComponent } from './pages/AllVms/allVms.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllResourceGroupsComponent,
    HeaderComponent, 
    ListAccountsComponent,
    ShowAccountComponent,
    SqlServerComponent,
    SqlDatabasesComponent,
    AllVmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
