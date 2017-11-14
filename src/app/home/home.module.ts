import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DxButtonModule } from 'devextreme-angular';

import { HomeComponent } from './home.component';
import { BaseComponent } from './base/base.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      { path: 'base', component: BaseComponent }
    ]
  }
];

@NgModule({
  imports: [CommonModule, DxButtonModule, RouterModule.forChild(ROUTES)],
  declarations: [HomeComponent, BaseComponent]
})
export class HomeModule {}
