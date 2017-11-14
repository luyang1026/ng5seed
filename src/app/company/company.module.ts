import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanymsgComponent } from './companymsg/companymsg.component';

export const ROUTES: Routes = [
  {
    path: 'company',
    component: CompanyComponent,
    children: [
      { path: '', redirectTo: 'msg', pathMatch: 'full' },
      { path: 'msg', component: CompanymsgComponent }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [CompanyComponent, CompanymsgComponent]
})
export class CompanyModule {}
