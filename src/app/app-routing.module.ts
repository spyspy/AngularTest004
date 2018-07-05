import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';                          
import { ManageComponent } from './components/manage/manage.component'; 
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [                                               
  {                                                                    
    path: '',                                                        
    component: DashboardComponent                                    
  },                                                                  
  {                                                                
    path: 'manage',                                                   
    component: ManageComponent                                       
  }                                                                
];      

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],

  declarations: []
})
export class AppRoutingModule { }           

