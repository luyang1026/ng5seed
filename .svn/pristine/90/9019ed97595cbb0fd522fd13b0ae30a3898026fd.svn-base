import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtalComponent } from './portal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetpwComponent } from './forgetpw/forgetpw.component';

export const routes: Routes = [
  {
    path: 'portal',
    component: ProtalComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgetpw', component: ForgetpwComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [ProtalComponent, LoginComponent, RegisterComponent, ForgetpwComponent]
})
export class ProtalModule {}
