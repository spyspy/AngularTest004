import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { RouterModule, Routes } from '@angular/router';

//Important for Route
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manage', component: ManageComponent },
  //{ path: '**', component: DashboardComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch:'full'},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true }) //For Debug only!!
  ],
  exports: [RouterModule], //Important for Route
  declarations: []
})
export class AppRoutingModule { }

