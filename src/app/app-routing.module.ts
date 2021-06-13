import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './entry/admin/admin.component';
import { BatchComponent } from './entry/admin/batch/batch.component';
import { DashboardComponent } from './entry/admin/dashboard/dashboard.component';
import { DepartComponent } from './entry/admin/depart/depart.component';
import { TrackComponent } from './entry/admin/track/track.component';
import { TraineeTabComponent } from './entry/admin/trainee-tab/trainee-tab.component';
import { TraineeComponent } from './entry/admin/trainee/trainee.component';
import { UsergroupComponent } from './entry/admin/usergroup/usergroup.component';
import { UsersComponent } from './entry/admin/users/users.component';



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
        path:"traineetabs",
        component: TraineeTabComponent,
      },
      {
        path:"dashboard",
        component: DashboardComponent
      },
      {
        path:"batchDetails",
        component: BatchComponent
      },
      {
        path:"userDetails",
        component: UsersComponent
      },
      {
        path:"trackDetails",
        component: TrackComponent
      }
    ]
    
  },
 
 
  {
    path:"departDetails",
    component: DepartComponent
  },
  {
    path:"groupDetails",
    component: UsergroupComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
