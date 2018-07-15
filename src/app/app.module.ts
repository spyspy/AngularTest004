import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StocksService } from './services/stocks.service';
import { HttpClientModule } from '@angular/common/http';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { AppRoutingModule } from './/app-routing.module';
import { MetricComponent } from './metric/metric.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//ng-bootstrap
//https://ng-bootstrap.github.io/#/getting-started

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent,
    MetricComponent,
    Dashboard2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(), //ng-bootstrap
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
