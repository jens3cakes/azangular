import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './pages/home/home.component'
import { SearchComponent } from './pages/search/search.component'
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
