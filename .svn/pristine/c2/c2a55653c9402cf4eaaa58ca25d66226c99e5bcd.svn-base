import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SpreadSheetsModule } from '../vendor/spread/gc.spread.sheets.angular2.10.2.0';

import { ReportComponent } from './report.component';
import { BasereportComponent } from './basereport/basereport.component';

export const ROUTES: Routes = [
  {
    path: 'report',
    component: ReportComponent,
    children: [
      { path: '', redirectTo: 'basereport', pathMatch: 'full' },
      { path: 'basereport', component: BasereportComponent }
    ]
  }
];

@NgModule({
  imports: [SpreadSheetsModule, CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [ReportComponent, BasereportComponent]
})
export class ReportModule {}
