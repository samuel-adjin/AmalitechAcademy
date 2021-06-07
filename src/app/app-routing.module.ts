import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './entry/admin/admin.component';
import { BatchComponent } from './entry/admin/batch/batch.component';
import { DashboardComponent } from './entry/admin/dashboard/dashboard.component';
import { TraineeComponent } from './entry/admin/trainee/trainee.component';



const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:"traineeInfo",
        component: TraineeComponent
      },
      {
        path:"dashboard",
        component: DashboardComponent
      },
      {
        path:"batchDetails",
        component: BatchComponent
      }
    ]
  },
 
 
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
