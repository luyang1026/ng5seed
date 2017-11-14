import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'portal', loadChildren: './portal/portal.module#ProtalModule' },
  { path: 'report', loadChildren: './report/report.module#ReportModule' },
  { path: 'company', loadChildren: './company/company.module#CompanyModule' },
  { path: 'notfound', loadChildren: './notfound/notfound.module#NotfoundModule' },
  { path: '**', redirectTo: '/notfound', pathMatch: 'full' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
