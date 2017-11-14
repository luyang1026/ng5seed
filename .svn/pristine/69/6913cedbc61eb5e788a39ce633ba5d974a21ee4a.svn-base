import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { ProtalModule } from './portal/portal.module';
import { HomeModule } from './home/home.module';

import { ReportModule } from './report/report.module';
import { CompanyModule } from './company/company.module';
import { NotfoundModule } from './notfound/notfound.module';

import { Globals } from './globals';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ProtalModule,
    HomeModule,
    BrowserModule,
    ReportModule,
    CompanyModule,
    NotfoundModule,
    AppRoutes
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule {}
