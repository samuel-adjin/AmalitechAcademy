import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './entry/admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BatchComponent } from './entry/admin/batch/batch.component';
import { TraineeComponent } from './entry/admin/trainee/trainee.component';
import { DashboardComponent } from './entry/admin/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BatchComponent,
    TraineeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
